var express = require('express');
var router = express.Router();
var bwipjs = require('bwip-js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/barcode', function(req,res,next) {
  bwipjs.toBuffer({
        bcid:           'pdf417',      
        text:           "<BC>982694290000000000001</BC><DA><TY>IR</TY><VE>00001</VE><TT>Mr</TT><FN>Tom Jones </FN><DB>28/09/1994</DB><PH>Y</PH><PO>Y</PO><FP>Y</FP><SG>N</SG><RR>Y</RR><RA><TT>Mrs </TT><FN>Mary Jones </FN><ID>UKBA Let or Photo ID</ID></RA></DA><HA>1AB46CD91AB46CD91AB46CD91AB46CD91AB46CD9</HA>",  
        scale:          2,              
        height:         20,             
        includetext:    false,          
    }, function (err, png) {
        if (err) {
            res.end("ERROR");
        } else {
            res.set('Content-Type', 'image/png');
            res.send(png);
        }
    });
});
module.exports = router;
