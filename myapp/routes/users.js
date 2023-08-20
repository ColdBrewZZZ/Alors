var express = require('express');
var router = express.Router();
var mysql = require('mysql2'); 
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


module.exports = router;
