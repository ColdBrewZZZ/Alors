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
  connection.query('SELECT * FROM category_images', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(results);
  });
});

router.get('/:categoryName', function(req, res, next) {
  var categoryName = req.params.categoryName;

  connection.query('SELECT * FROM categories', (err, categories) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    connection.query('SELECT * FROM category_images', (err, category_images) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      var category = categories.find(cat => cat.name === categoryName);
      if (!category) {
        res.status(404).send('Category not found');
        return;
      }

      var categoryId = category.id;
      var categoryItem = category_images.find(item => item.category_id === categoryId);
      if (!categoryItem) {
        res.status(404).send('Category item not found');
        return;
      }

      var photoUrl = categoryItem.photo_path; 
      res.json({ photoUrl }); 
    });
  });
});

module.exports = router;
