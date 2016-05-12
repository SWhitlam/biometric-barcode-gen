module.exports = {
  buildBarcodeXML: function(params) {
    if(this.validateBarcode(params)){
        var barcode = "<BC>982694290000000000001</BC>\
<DA> \
<TY>IR</TY> \
<VE>00001</VE> \
<TT>Mr        </TT> \
<FN>Tom Jones                                                   </FN> \
<DB>28/09/1994</DB> \
<PH>Y</PH> \
<PO>Y</PO> \
<FP>Y</FP> \
<SG>N</SG> \
<RR>Y</RR> \
<RA> \
<TT>Mrs       </TT> \
<FN>Mary Jones                              </FN> \
<ID>UKBA Let or Photo ID</ID> \
</RA> \
</DA> \
<HA>hgdhgfdhfghdfhfdghfghfghgfdh54654hthgdf</HA>";
        return barcode;
    }
    else
    {
        return undefined;
    }
    
  },
  
  fieldPadding: function(field){
      //TODO: Pad Fields to correct length
  },
       
  validateBarcode: function(params) {
      //TODO: validation of fields
      return true;
  },
  
  generateHash: function(params){
      //TODO: Hashing Algorithm 
  }

};