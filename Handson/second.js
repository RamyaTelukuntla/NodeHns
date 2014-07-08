var util=require('util');
var stdin=process.openStdin();
var fs=require('fs');

console.log("Enter an operation to perform");
console.log("1.Addition");
console.log("2.subtraction");
console.log("3.multiplication");
console.log("4.division");



fs.readFile('/home/user/PycharmProjects/Nodejs/Input/calculator.json',function(err,data)
{
    if(err)
    {
        err;
    }
    else {
        n = JSON.parse(data);
        var n1 = n.values.firstnumber;
        var n2 = n.values.secondnumber;

        var res;


        stdin.addListener('data', function (text) {
            if (text == 1) {
                res = n1 + n2;
                console.log(res);
            }
            else if (text == 2) {
                res = n1 - n2;
                console.log(res);
            }
            else if (text == 3) {
                res = n1 * n2;
                console.log(res);
            }
            else if (text == 4) {
                res = n1 / n2;
                console.log(res);
            }
            else {
                console.log("enter a valid option");
            }
        });
    }
});











