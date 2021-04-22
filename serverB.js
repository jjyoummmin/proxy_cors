const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const axios = require('axios');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/clientB.html');
});

app.get('/students', async (req,res)=>{
    try{
        let response = await axios.get('http://localhost:8000/students');
        console.log("serverB", response.data);
        res.json(response.data);
    }catch(e){
        console.log(e);
    }

})

server.listen(9000, () => {
  console.log('serverB is listening on 9000');
});