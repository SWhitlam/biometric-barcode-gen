var config = require('../../../config.js');
var fixtures = require('../../fixtures/params.js');
var Barcode = require('../../../model/Barcode.js');
var should = require('should');
describe('Barcode', function () {
  var model;
  


  describe('has static params', function () {
    it('assigns static parameters on creation', function (done) {
        var barcode = new Barcode(fixtures.validParams);
        barcode.TY.should.be.eql(config.static.TY);
        barcode.PH.should.be.eql(config.static.PH);
        barcode.VE.should.be.eql(config.static.VE);
        done();
    });
  });
  
  

    
});