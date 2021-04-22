const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/students', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientD.html');
});

server.listen(9090, () => {
  console.log('serverD is listening on 9090');
});