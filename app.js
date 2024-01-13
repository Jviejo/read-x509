const express = require('express');

const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

https.createServer({
    cert: fs.readFileSync(path.join(__dirname,  'cert.pem')),
    key: fs.readFileSync(path.join(__dirname, 'key.pem')),
    requestCert: true,
    rejectUnauthorized: false,
    ca: fs.readFileSync(path.join(__dirname, 'cert.pem'))
}, app).listen(3333, function () {
    console.log('Servidor https correindo en el puerto 3333');
});


app.get('/', async function (req, res) {
    const cert = await req.socket.getPeerCertificate();
    
    console.log(cert);
    res.send(cert);
}
);