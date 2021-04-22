const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientC.html');
});


server.listen(7000, () => {
  console.log('serverC is listening on 7000');
});

