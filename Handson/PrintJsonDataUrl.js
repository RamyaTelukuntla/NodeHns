/**
 * Created by user on 1/7/14.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var url = require('url');

app.use(bodyParser());
app.get('/getvalue', function (req, res) {
    var name1 = req.query.name;
    fs.readFile('/home/user/PycharmProjects/Nodejs/Input/student.json', function (err, data) {
        if (err)
        {

            err;
        }

        else {
            var json = data;
            json = JSON.parse(json);
            var html = json.students[name1].id + '<br>' + json.students[name1].name + '<br>' + json.students[name1].dob;
            res.send(html);
        }
    });
});
app.listen(5950);