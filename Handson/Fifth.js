
var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser());
app.set('views','./views');
app.set('view engine','jade');
var routes=require('../routes/index');
app.use('/', routes);
app.listen(1056);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;