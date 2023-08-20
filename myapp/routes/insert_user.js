var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sqldoawk1!',
  database: 'alors',
});


router.use(express.json());


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


router.post('/', function (req, res, next) {
  
  const { email, password, title, first_name, last_name, phone, birthday } = req.body;

  
  const insertQuery = `
    INSERT INTO users (email, password, title, first_name, last_name, phone, birthday)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  
  connection.query(
    insertQuery,
    [email, password, title, first_name, last_name, phone, birthday],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

     
      res.status(201).json({ message: 'User created successfully', insertedId: result.insertId });
    }
  );
});

module.exports = router;
