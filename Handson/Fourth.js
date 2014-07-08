/**
 * Created by user on 30/6/14.
 */


/* Program to read a json file and render it to the browser */
var fs=require('fs');
var express=require('express');
var app=express();
app.use('/api', function(req,res) {

    var data = fs.readFile('./profile.json', function (err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);

    });
});

app.listen(4000);



