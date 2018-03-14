const MO_HEADER_IEI     = 0x01;
const MO_PAYLOAD_IEI    = 0x02;
const MO_LOC_INFO_IEI   = 0x03;
const MO_CONFIRM_IEI    = 0x05;

const bitValueFromByte = (byte, bit) => {
    return Math.floor(byte / Math.pow(2, bit)) % 2;
};

const wordFromBytes = (byteArray) => {
    const buf = new ArrayBuffer(2);
    let view = new DataView(buf);
    
    byteArray.forEach((b, i) => {
        view.setUint8(i, b);
    });
    
    return view.getUint16(0);
};

const doubleWordFromBytes = (byteArray) => {
    const buf = new ArrayBuffer(4);
    let view = new DataView(buf);
    
    byteArray.forEach((b, i) => {
        view.setUint8(i, b);
    });
    
    return view.getUint32(0);
};

const parseBasedOnIEI = (data, index, obj) => {
    let byteArray = [];
    
    switch(data[index]) {
        case MO_HEADER_IEI:
            index += 3;
            obj.cdrRef = doubleWordFromBytes([data[index++], data[index++], data[index++], data[index++]]);
            
            for (let x = index; x < index+15; x++) {
                byteArray.push(data[x]);
            }
            
            obj.imei = Buffer.from(byteArray).toString('utf8');
            
            index += 15;
            obj.sessionStatus = data[index++];
            obj.momsn = wordFromBytes([data[index++], data[index++]]);
            obj.mtmsn = wordFromBytes([data[index++], data[index++]]);
            obj.timeOfSession = doubleWordFromBytes([
                data[index++],
                data[index++],
                data[index++],
                data[index++]
            ]);
            
            return index;
            
        case MO_PAYLOAD_IEI:
            index++;
            const payloadLength = wordFromBytes([data[index++], data[index++]]);
    
            byteArray = [];
            for (let x = index; x < index + payloadLength; x++) {
                byteArray.push(data[x]);
            }
    
            obj.payload = Buffer.from(byteArray);
    
            index += payloadLength;
            return index;
            
        case MO_LOC_INFO_IEI:
            
            obj.locationInfoLength = wordFromBytes([data[++index], data[++index]]);
            index++;
            const nsi = bitValueFromByte(data[index], 1);
            const ewi = bitValueFromByte(data[index++], 0);
            
            let deg = data[index++];
            let min = wordFromBytes([data[index++], data[index++]]);
            obj.latitude = nsi === 0 ? deg+(min/60000):-(deg+(min/60000));
            deg = data[index++];
            min = wordFromBytes([data[index++], data[index++]]);
            obj.longitude = ewi === 0 ? deg+(min/60000):-(deg+(min/60000));
            obj.cepRadius = doubleWordFromBytes([
                data[index++],
                data[index++],
                data[index++],
                data[index++]
            ]);
            return index;
            
        case MO_CONFIRM_IEI:
            console.log('Its a confirmation IEI');
            break;
            
        default:
            throw new Error("Unknown IEI encountered during sbd-stream parsing");
    }
}

const sbdStream = function (data) {
    let sbdObject = {};
    let index = 0;
    
    this.protocolRev = data[index++];
    this.overallMessageLength = wordFromBytes([data[index++], data[index++]]);
    parseBasedOnIEI(data, index, sbdObject);
    while(index <= (this.overallMessageLength - 3)) {
        index = parseBasedOnIEI(data, index, sbdObject);
    }
    
    return sbdObject;
};

module.exports = sbdStream;