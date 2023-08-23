var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('this is the orders');
});

// Endpoint to set a cookie
router.get('/set-cookie', function(req, res, next) {
  // Set a cookie named "myCookie" with the value "hello"
  res.cookie('myCookie', 'gogeed');

  // Send a response
  res.send('Cookie set!');
});

// Endpoint to get the cookie
router.get('/get-cookie', function(req, res, next) {
  // Retrieve the value of the "myCookie" cookie
  var cookieValue = req.cookies.myCookie;

  // Check if the cookie exists
  if (cookieValue) {
    // Display "hello" if the cookie exists
    res.send('Cookie value: ' + cookieValue);
  } else {
    // Display a message if the cookie doesn't exist
    res.send('Cookie not found');
  }
});

module.exports = router;
