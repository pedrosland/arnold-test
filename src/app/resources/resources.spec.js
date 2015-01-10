'use strict';

describe('at.resources', function(){
  var atResource;

  beforeEach(module('at.resources'));

  beforeEach(inject(function(_atResource_) {
    atResource = _atResource_;
  }));

  describe('can compute obfuscated stock references', function(){
    // obfuscated stock reference: function parameters (stockReference, registration)
    var tests = {
      'AVRNNDF6H0-OUS2': ['ARNFH-U-5728', 'SO06DNV']
    };

    angular.forEach(tests, function(params, expected){
      var stockRef = params[0];
      var registration = params[1];

      it('stock reference: ' + stockRef + ' registration: ' + registration, function(){

        expect(atResource.getObfuscatedStockReference(stockRef, registration)).toBe(expected);

      });
    });

  });

  describe('returns a list of image URLs', function(){
    // obfuscated stock reference: array of image URLs
    var tests = {
      'AKRNNCB6F5-WUS1': [
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/i/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/6/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/f/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/4/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/5/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/r/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/4/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/i/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/6/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/f/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/5/',
        'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/r/'
      ]
    };

    angular.forEach(tests, function(expected, stockRef){

      it('stock reference: ' + stockRef, function(){
        var result = atResource.getImageUrls(stockRef);

        expect(result.length).toBe(expected.length);

        expected.forEach(function(expectedItem){
          expect(result).toContain(expectedItem);
        });

      });
    });

  });


});
