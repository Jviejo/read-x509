const express = require('express');

const https = require('https');
const fs = require('fs');
const app = express();

https.createServer({
    cert: fs.readFileSync('cert.pem'),
    key: fs.readFileSync('key.pem'),
    requestCert: true,
    rejectUnauthorized: false,
    ca: fs.readFileSync('cert.pem')
}, app).listen(3333, function () {
    console.log('Servidor https correindo en el puerto 3333');
});


app.get('/', async function (req, res) {
    const cert = await req.socket.getPeerCertificate();
    
    console.log(cert);
    res.send(cert);
}
);