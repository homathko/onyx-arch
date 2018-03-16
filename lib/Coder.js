/**
 * Coder.js
 *
 * Handles encoding/decoding of SBD payload
 *
 * @class: Coder
 *
 */

const protobuf = require('protobufjs');
const util = require('util');

class Coder {
    constructor(protoFile, type) {
        this._protoFile = protoFile;
        this._type = type;
    
        this._coder = protobuf.Root.fromJSON(require(protoFile)).lookupType(type);
        
        return this;
    }
    
    get coder () {
        return this._coder;
    }
    
    get enum () {
        return this._enum;
    }

    decode(buffer) {
        let decoded;
    
        try {
            decoded = this._coder.decode(buffer);
        } catch (e) {
            if (e instanceof protobuf.util.ProtocolError) {
                console.log(e);
                // e.instance holds info about missing required fields
                return null;
            } else {
                // Wire format invalid
                return null;
            }
        }
        
        return decoded;
    }
}

module.exports = Coder;