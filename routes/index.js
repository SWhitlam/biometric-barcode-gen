var express = require('express');
var router = express.Router();
var barcodeBuilder = require('../services/BarcodeGenerator.js');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/barcode', function(req,res,next) {
  
  
 barcodeBuilder.generateBarcode(req.query, function(err, png){
     if(err) {
         return next(err);
     }
     res.set('Content-Type', 'image/png');
     res.send(png);
     
 });
   
   
  
});
module.exports = router;
