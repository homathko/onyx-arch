const net = require('net');
const sbdObjectFromStream = require('./sbd-stream');
const Coder = require('./lib/Coder');

const client = new net.Socket();
// const HOST = '35.185.248.61';
const HOST = 'localhost';

const coder = new Coder('.././onyx-proto.json', 'onyx.Posrep');

const sbdData = Buffer.from(require('./tx-test'));
const sbdObj = sbdObjectFromStream(sbdData);

const pingObject = {
    latitude   : 44.1020304,
    longitude  : -122.4030201,
    altInMeters: 590,
    speedInmps : 120,
    mode       : coder.coder.PosMode['PING']
};

const payload = coder.coder.create(pingObject);
const protoBuffer = coder.coder.encode(payload).finish();

sbdObj.payload = protoBuffer;

console.log(sbdObj);

// const sbdData = Buffer.from(require('./tx-test'));

client.connect(8080, HOST, () => {
    console.log('Connected to server.');

    client.write(sbdData);
    client.end();
});