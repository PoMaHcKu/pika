﻿const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const enforce = require('express-sslify');

const app = express();
app.use(enforce.HTTPS({trustProtoHeader: true}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);