var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/home',function(req,res)
{
    res.render('input.jade',
        {
        });

});

router.post('/last',function(req,res)
{
    var name=req.body.name;
    var id=req.body.id;

    res.render('last.jade',
    {
    name:name,
    id:id
    });
});

module.exports = router;
