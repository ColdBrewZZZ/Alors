var express = require('express');
var router = express.Router();

/* this is to get orders */
router.get('/', function(req, res, next) {
  res.send('this is the orders');
});

// order history 
router.get('/order_history', function(req, res, next) {
    res.send('this is the order_history for a user');
  });

module.exports = router;
