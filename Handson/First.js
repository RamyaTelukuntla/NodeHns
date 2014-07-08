/**
 * Created by user on 23/6/14.
 */


/* program to update a existing json file and print the json in a new file */
/* Importing the libraries*/
var fs=require('fs');


fs.readFile('/home/user/PycharmProjects/Nodejs/Input/firstInput.json',function(err,data)  //reading the json file having the profile data
{
    if(err)
    {
        throw 'error'+err;
    }
    else {
        var json = JSON.parse(data);
        //console.log(json);
        json.student.id = "12345";
        //console.log(json);
        fs.writeFile('/home/user/PycharmProjects/Nodejs/output/FirstOutput.json', JSON.stringify(json,null,4));          //writing the json into a new file
    }

});







