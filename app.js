var express=require("express");
var bodyparser=require('body-parser');
var morgan=require('morgan');
var countryRouter=require('./controller/country.js');
var authenticationRouter=require('./controller/authentication.js');
var defaultMiddleware=require('./middleware/defaultMiddleware.js');
var config=require('./constant/config.js');
var app=express();
var port=8080;
app.use(bodyparser.json());
app.use(morgan(config.PROFILE));
app.use(function(req,res,next){
    defaultMiddleware(req,res);
    next();
});
app.get("/",function(req,res){
    res.send("Hello World");
});
//Register routers
app.use('/country',countryRouter);
app.use('/authenticate',authenticationRouter);
//Register routers

app.listen(port,function(){
    console.log('Server running on port '+port+'.');
});