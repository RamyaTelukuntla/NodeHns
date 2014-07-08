/**
 * Created by user on 1/7/14.
 */


/* program to get the Details from Json bu giving the Input from the url*/
/*Importing the libraries*/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs=require('fs');
var url=require('url');

app.get('/getname', function(req, res){                 //getname is the name of the api
    var id=req.query.id;
    fs.readFile('./profile.json',function(err,data)     //reading a Json data file
    {
        if(err)
        {
            err;
        }
        else
        {
            var json=data;
            json=JSON.parse(json);
            var value=json.student.id;
            var html = value;
            console.log(html);
            res.send(html);
        }
    })
});
app.listen(9900);                                       //this program listens to the server at port 9900