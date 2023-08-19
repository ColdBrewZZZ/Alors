var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  var filePath = path.join(__dirname, '../users_data.txt');

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


router.get('/user', function(req, res, next) {
  res.send('this is just one user');
});

module.exports = router;
