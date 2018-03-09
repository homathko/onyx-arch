/**
 * www.js
 *
 * A basic server prototype to receive posreps (pings) and distress messages from protobuf
 * and test local datastore, google pub/sub
 *
 */

const bodyParser = require('body-parser');
const express = require('express');
// const Coder = require('./lib/Coder');
const DS = require('./lib/Persistence');

const app = express();
// const posRepCoder = new Coder ('onyx.Posrep');
// const ds = new DS();

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.raw({type: 'application/onyx-buffer'}));

app.get('/', (req, res) => {
    res.sendStatus(200);
});

app.post('/', (req, res) => {
    // Only receives post requests from Iridium gateway
    // Conduct test and check to determine source
    // let posrepRx;
    //
    // if (req.headers['user-agent'] === 'axios/0.17.1' || req.headers['user-agent'] === 'insomnia/5.12.4') {
    //     posrepRx = posRepCoder.decode(req.body);
    //     if (posrepRx)
    //         res.statusCode = 200;
    // } else {
    //     res.statusCode = 404;
    // }
    //
    // ds.DSUpdate(null, posrepRx, (err, savedData) => {
    //     if (err) {
    //         throw new Error(err);
    //     }
    // });
    //
    // res.end(JSON.stringify(posrepRx));
    console.log(JSON.stringify(req));
    res.end(req.body);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});



