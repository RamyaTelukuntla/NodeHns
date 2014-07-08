/**
 * Created by user on 1/7/14.
 */
/**
 * Created by user on 1/7/14.
 */

/* program to take  the input values from a html page and display the data related to the input in a new page */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs=require('fs');
var underscore=require('underscore');
app.use(bodyParser());
app.get('/', function(req, res){
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

    console.log(name1);
    fs.readFile('/home/user/PycharmProjects/Nodejs/Input/student.json',function(err,data)
    {
        if(err)
        {
            err;
        }
        else
        {
            var json=data;
            json=JSON.parse(json);
            var html=json.students[name1].id+'<br>'+json.students[name1].name+'<br>'+json.students[name1].dob; //getting the data from json based on the input
            res.send(html);
        }


});

});
app.listen(5940);

