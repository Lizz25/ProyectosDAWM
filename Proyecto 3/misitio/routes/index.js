var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Character =require('../models').character;

/* GET home page. */
router.get('/character', function(req, res, next) {
  //res.render('index', { title: 'Express con character' });
  Character.findAll()
    .then((resultado) => {
        res.json(resultado);
    })
});

router.get('/character/:id', function(req, res, next) {
  let id_req = req.params.id
  Character.findOne({
      where:{id:id_req}
  })
  .then(resultado => {
      res.json(resultado)
  })
  .catch(error => res.status(400).send(error))
});

module.exports = router;
