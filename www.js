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
const ws = fs.createWriteStream('from-office.txt');

const posRepCoder = new Coder ('onyx.Posrep');
const ds = new DS();

const PORT = 8080;

net.createServer(function(socket) {
    console.log('connection detected');
    
    socket.on('data', (data) => {
        console.log(data);
        const buffer = Buffer.from(data, 'binary');
        
        ws.write(buffer);
    
        // ds.DSUpdate(null, buffer, (err, savedData) => {
        //     if (err) {
        //         throw new Error(err);
        //     }
        //
        //     console.log('Saved data: ' + savedData);
        // });
    });
    
    socket.on('end', () => {
        console.log('Connection closed');
        ws.close();
    });
}).listen(PORT, () => {
    console.log('server listening');
});


