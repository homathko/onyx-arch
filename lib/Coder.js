/**
 * Coder.js
 *
 * Handles encoding/decoding of M2M messages to and from the Iridium gateway
 *
 * @class: Coder
 *
 */

const protobuf = require('protobufjs');

class Coder {
    constructor(type) {
        protobuf.load('onyx.proto', (err, root) => {
            if (err)
                throw err;
            
            this._coder = root.lookupType(type);
        });
    }
    
    get coder () {
        return this._coder;
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