var express = require('express');

var router = express.Router();

var x=Math.random();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('computation', {
    answert1:'Math.pow()  applied to '+x+ 'is'+Math.pow(x),
    answer2:'Math.sign()   applied to '+x+ 'is'+Math.sign(x) ,
    answer3:'Math.tanh() applied to '+x+ 'is'+Math.tanh(x),
    answer4:'Math.trunc() applied to '+x+ 'is'+Math.trunc(x),

  title: 'computation by Anvesh' });

});



module.exports = router;