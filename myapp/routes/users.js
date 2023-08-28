var express = require('express');
var router = express.Router();
var mysql = require('mysql2'); 
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sqldoawk1!',
  database: 'alors'
});

router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(results);
  });
});

router.get('/user', function(req, res, next) {
  const id = req.body
  connection.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(results);
  });
});


router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
 

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    if (results.length > 0) {
      const user = results[0];

     
      if (password === user.password) {
        
         
        res.json({ success: true });
      } else {
     
        res.json({ success: false });
      }
    } else {

      res.json({ success: false });
    }
  });
});

// Endpoint to set a cookie
router.get('/set-cookie', function(req, res, next) {
  const userData = { id: 1};
    res.cookie('myCookie', JSON.stringify({ id: 1}), {
      domain: 'localhost'
    });
  // Send a response
    res.send('Cookie set!');
}); 
  


// router.get('/private-area', auth, (req, res) => {

// });

module.exports = router;