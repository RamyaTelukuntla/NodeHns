/* program to display the form page and take input from the user and display the summary in a new page */

var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser());
app.set('views','./views');                    // points to the jade files in the view directory
app.set('view engine','jade');
var routes=require('../routes/index');        // points to the index file in the route directory which consists of the to do api's
app.use('/', routes);
app.listen(1056);


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;