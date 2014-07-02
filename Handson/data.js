/**
 * Created by user on 1/7/14.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs=require('fs');
app.use(bodyParser());
app.get('/getvalue', function(req, res){
    var html = '<form action="/" method="post">' +
        'Enter key' +
        '<input type="text" name="name" />' +
        '<br>' +
        '<button type="submit">Submit</button>' +
        '</form>';
        res.send(html);
});
app.post('/', function(req, res){
    var name1 = req.body.name;
    console.log(name);
    fs.readFile('./profile.json',function(err,data)
    {
        if(err)
        {
            err;
        }
        else
        {
            var json=data;
            json=JSON.parse(json)
            var value=json.students.name1;
            var html = value;
            console.log(html);
            res.send(html);
        }
    })

});
app.listen(8900);
