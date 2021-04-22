const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const axios = require('axios');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientE.html');
});


server.listen(8080, () => {
  console.log('serverE is listening on 8080');
});