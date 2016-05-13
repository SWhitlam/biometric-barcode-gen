var config = require("../config.js");

var Barcode  = function Barcode(params) {
    //set static values from config
    this.TY = config.static.TY;
    this.PH = config.static.PH;
    this.VE = config.static.VE;
    this.params = params;
};

Barcode.prototype.HA = function() { 
    
    //TODO: calcualte Hashcode
    return "aHashCode";
}

Barcode.prototype.setBC = function(BC){
    this.BC = BC + calculateCheckDigit();
}

var calculateCheckDigit = function() {
    return "9";
}

module.exports = Barcode;