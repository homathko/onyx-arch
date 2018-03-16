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
    
        const objectFromSpace = sbdObjectFromStream(data);
    
        const decodedBuffer = PosrepDecoder.decode(objectFromSpace.payload);
        const protoBufferObject = PosrepDecoder.coder.toObject(decodedBuffer);
    
        objectFromSpace.decodedPayload = JSON.stringify(protoBufferObject);
        console.log(JSON.stringify(protoBufferObject)+'\n');
        
        ds.DSUpdate(null, objectFromSpace, (err, savedData) => {
            if (err) {
                throw new Error(err);
            }

            console.log('Saved data: ' + savedData);
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


