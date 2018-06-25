var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {
      firstname: 'Alisson',
      lastname: 'Becker',
      age: 32,
      email: 'AlissonBecker@gmail.com'
    },
    {
      firstname: 'Case',
      lastname: 'Miro',
      age: 26,
      email: 'Casemiro@gmail.com'
    },
    {
      firstname: 'Douglas',
      lastname: 'Costa',
      age: 28,
      email: 'DouglasCosta@gmail.com'
    },
    {
      firstname: 'Neymar',
      lastname: 'Junior',
      age: 25,
      email: 'neymar@gmail.com'
    }
  ])
});

module.exports = router;
