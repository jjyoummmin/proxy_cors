const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
var cors = require('cors')

// app.use(cors());             
var corsOptions = {
  origin: 'http://localhost:9090',
  optionsSuccessStatus: 200 
}

app.get('/', (req, res) => {
  res.send('<h1>Hello this is serverA</h1>');
});

app.get('/students', cors(corsOptions), (req,res)=>{
    console.log("api request~");
    console.log(req);
    res.json({
        list:[
            {name:'harry', age:15},
            {name:'hermione', age:13},
            {name:'Ron', age:18},
            {name:'Dobby', age:20},
            {name:'Hagrid', age:5},
        ]
    })
})

server.listen(8000, () => {
  console.log('serverA is listening on 8000');
});









