var express = require('express');
var router = express.Router();

/* IMPORTE El ARCHIVO CON EL MODELO */
const clase_gym = require('../models').gym;

router.get('/findAll/json', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

  clase_gym.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});

module.exports = router;