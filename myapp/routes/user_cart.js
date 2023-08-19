var express = require('express');
var router = express.Router();

/* this is user cart */
router.get('/', function(req, res, next) {
  res.send('this is the info from user cart table');
});



module.exports = router;
