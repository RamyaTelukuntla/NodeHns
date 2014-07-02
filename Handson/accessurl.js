/**
 * Created by user on 1/7/14.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs=require('fs');
var url=require('url');
app.get('/getname', function(req, res){

    var id=req.query.id;

    fs.readFile('./profile.json',function(err,data)
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
app.listen(9900);