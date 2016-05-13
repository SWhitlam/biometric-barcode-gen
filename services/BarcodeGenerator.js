var Barcode = require('../model/Barcode.js');
var config = require('../config.js');
var pad = require('node-string-pad');
var builder = require('xmlbuilder');
var bwipjs = require('bwip-js');
var BarcodeService = {};

BarcodeService.generateBarcode = function (params, callback) {
    buildBarcodeFromParams(params, function (barcode) {
        generateXMLPayload(barcode, function (xml) {
            bwipjs.toBuffer({
                bcid: 'pdf417',
                text: xml,
                columns: params.cols || config.config.barcodeCols,
                includetext: false
            }, function (err, png) {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, png);
                }
            });
        });
    });
}

var buildBarcodeFromParams = function (params, callback) {
        //TODO: field validation
    
        var barcode = new Barcode(params);
        barcode.setBC(config.rules.chargableIIN + pad(params.cidid, 12, '0'));
        barcode.TT = pad(params.title, 10);
        barcode.FN = pad(params.fullname, 60);
        
        //TODO: Validate and format DOB - only year is mandatory
        barcode.DB = params.dob;
        
        barcode.PO = canPhotoBeOverridden(params.dob);
        barcode.FP = fingerprintsRequired(params.dob);
        barcode.SG = signatureRequired(params.dob);
        barcode.RR = responsibleAdultRequired(params.dob);
        
        // TODO: if RA required then add details 
        
         callback(barcode);
}

var generateXMLPayload = function (barcode, callback) {
        var xml = builder.begin();
        xml.ele('BC',barcode.BC);
        var daElem = xml.ele('DA',barcode.BC);
        daElem.ele('TY',barcode.TY);
        daElem.ele('VE',barcode.VE);
        daElem.ele('TT',barcode.TT);
        daElem.ele('FN',barcode.FN);
        daElem.ele('DB',barcode.DB);
        daElem.ele('PH',barcode.PH);
        daElem.ele('PO',barcode.PO);
        daElem.ele('FP',barcode.FP);
        daElem.ele('SG',barcode.SG);
        daElem.ele('RR',barcode.RR);
        
        //TODO: add in RA elements
        
        xml.ele('HA', barcode.HA());
        
       var result = xml.end({pretty: true,indent: '  ',newline: '\n',allowEmpty: true});
       callback(result);
        
}


//TODO: add logic for business rules
var canPhotoBeOverridden = function(DoB) {
    return 'Y';
}

var fingerprintsRequired = function(DoB) {
    return 'Y';
}

var responsibleAdultRequired = function(DoB) {
    return 'N';
}

var signatureRequired = function(DoB) {
    return 'Y';
}

module.exports = BarcodeService;




    
