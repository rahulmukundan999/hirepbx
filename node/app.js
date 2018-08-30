var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');




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

const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('Connection Established');
});

app.listen(port,()=>{
    console.log('server started');
});
