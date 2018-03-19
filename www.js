/**
 * www.js
 *
 * A basic server prototype to receive posreps (pings) and distress messages from protobuf
 * and test local datastore, google pub/sub
 *
 */

const net = require('net');
const Coder = require('./lib/Coder');
const DS = require('./lib/Persistence');

const fs = require('fs');
const ws = fs.createWriteStream('from-space.txt');

const sbdObjectFromStream = require('./sbd-stream');
const PosrepDecoder = new Coder ('.././onyx-proto.json', 'onyx.Posrep');
const ds = new DS();

const PORT = 8080;

net.createServer(function(socket) {
    console.log('connection detected');
    
    socket.on('data', (data) => {
        console.log(data+'\n\n');
        let ping = {};
        const objectFromSpace = sbdObjectFromStream(data);
    
        const decodedBuffer = PosrepDecoder.decode(objectFromSpace.payload);
        const protoBufferObject = PosrepDecoder.coder.toObject(decodedBuffer);
    
        objectFromSpace.decodedPayload = JSON.stringify(protoBufferObject);
        console.log(JSON.stringify(protoBufferObject)+'\n');
        
        ds.DSUpdate('MOMRecord', null, objectFromSpace, (err, savedData) => {
            if (err) {
                throw new Error(err);
            }

            const pingJSON = JSON.parse(savedData.decodedPayload);
            ping.imei = parseInt(savedData.imei, 10);
            ping.latitude = pingJSON.latitude;
            ping.longitude = pingJSON.longitude;
            ping.altitude = pingJSON.altInMeters;
            ping.mode = pingJSON.mode;
            ping.timeOfSession = savedData.timeOfSession
            
            
            ds.DSUpdate('PosRep', null, ping, (err, savedPing) => {
                if (err) {
                    throw new Error(err);
                }
                
                console.log("New entity of type PosRep created: \n" + JSON.stringify(savedPing));
            });
        });
    });
    
    socket.on('end', () => {
        console.log('Connection closed');
        ws.close();
        socket.end(); // Best practice to close socket at both ends
    });
}).listen(PORT, () => {
    console.log('server listening');
});


