/**
 * Created by user on 1/7/14.
 */

/*program to get the data frin the json by giving the search input values from the url */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var url = require('url');
app.use(bodyParser());
app.get('/getvalue', function (req, res) {
    var name1 = req.query.name;
    fs.readFile('/home/user/PycharmProjects/Nodejs/Input/student.json', function (err, data) {        //reading json file
        if (err)
        {
            err;
        }
        else {
            var json = data;
            json = JSON.parse(json);
            var html = json.students[name1].id + '<br>' + json.students[name1].name + '<br>' + json.students[name1].dob; /*getting values from the json*/
            res.send(html);
        }
    });
});
app.listen(5950);