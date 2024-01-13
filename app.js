const express = require('express');

const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

https.createServer({
    cert: fs.readFileSync(path.join(__dirname,  'mydomain.com.crt')),
    key: fs.readFileSync(path.join(__dirname, 'mydomain.com.key')),
   // ca: [fs.readFileSync(path.join(__dirname, 'rootCA.crt'))],


    requestCert: true,
    rejectUnauthorized: false,
}, app).listen(3333, function () {
    console.log('Servidor https correindo en el puerto 3333');
});


app.get('/', async function (req, res) {
    const {subject, issuer, subjectaltname, infoAccess} = await req.socket.getPeerCertificate();   
    res.send("<pre>"+JSON.stringify({subject, issuer, subjectaltname, infoAccess} , null, 4)+"</pre>");
}
);