/**
 * Created by user on 23/6/14.
 */
var fs=require('fs');
fs.readFile('/home/user/PycharmProjects/Nodejs/Handson/profile.json',function(err,data)
{
    if(err)
    {
        throw 'error'+err;
    }
    else {
        var json = JSON.parse(data);
        //console.log(json);
        json.student.id = "1234455";
        //console.log(json);
        fs.writeFile('/home/user/PycharmProjects/Nodejs/Handson/UpdatedHns1.json', JSON.stringify(json));
    }

});







