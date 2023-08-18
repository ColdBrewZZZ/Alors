var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  var filePath = path.join(__dirname, '../items_data.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    var itemsData = JSON.parse(data);
    res.json(itemsData);
  });
});

router.get('/:categoryName', function(req, res, next) {
  var categoryName = req.params.categoryName; 
  var categoriesFilePath = path.join(__dirname, '../categories.txt');
  var itemsFilePath = path.join(__dirname, '../items_data.txt');

  fs.readFile(categoriesFilePath, 'utf8', (err, categoriesData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    fs.readFile(itemsFilePath, 'utf8', (err, itemsData) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      var categories = JSON.parse(categoriesData);
      var items = JSON.parse(itemsData);

      var category = categories.find(cat => cat.name === categoryName);
      if (!category) {
        res.status(404).send('Category not found');
        return;
      }

      var categoryId = category.id;
      var categoryItems = items.filter(item => item.category_id === categoryId);
      res.json(categoryItems);
    });
  });
});

module.exports = router;
