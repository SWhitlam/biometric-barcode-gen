var express = require('express');
var router = express.Router();
var bwipjs = require('bwip-js');
var barcodeBuilder = require('../lib/barcodeBuilder.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/barcode', function(req,res,next) {
  
 var barcode = barcodeBuilder.buildBarcodeXML(req.params);
   
  bwipjs.toBuffer({
        bcid:           'pdf417',      
        text:           barcode,  
        columns: 6,           
        includetext:    false,          
    }, function (err, png) {
        if (err) {
            return next(err);
        } else {
            res.set('Content-Type', 'image/png');
            res.send(png);
        }
    });
});
module.exports = router;
