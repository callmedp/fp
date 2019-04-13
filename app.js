var express =require('express');
var bodyParser = require('body-parser');
var api =require('./routes/api');
var cors=require('cors')
var app= express();
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api',api);



var PORT=3000;
app.listen(PORT,()=>console.log('listening to port 3000'));
