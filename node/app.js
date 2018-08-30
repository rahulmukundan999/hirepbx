var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var http = require('http');




var app = express();

const route = require('./routes/route');

mongoose.connect('mongodb://10.136.117.22:27017/contactlist');

mongoose.connection.on('connected',()=>{
    console.log('Connected');
});

mongoose.connection.on('error',(err)=>{
    if(err)
    {
    console.log('error');
    }

});


app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.options("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   //other headers here
    res.status(200).end();
});

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('Connection Established');
});

http.createServer( function (request, response) {  
    console.log(request);
}).listen(3000);
