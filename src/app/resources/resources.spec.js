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
      'AVRNNDF6H0-OUS2': ['ARNFH-U-5728', 'SO06DNV'], // example
      //'ADRRNUB5C0-LUM1': ['ARNBC-U-19231', 'ML05URD'], // from website - this doesn't follow task description
      'ALRM2': ['ARNFH-U-5728', 'ML'] // small registration
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

  it('returns a list of image URLs of the requested size', function(){
    // obfuscated stock reference: array of image URLs
    var stockRef = 'AKRNNCB6F5-WUS1';
    var images350 = [
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/i/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/6/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/f/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/4/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/5/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/r/'
    ];
    var images800 = [
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/4/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/i/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/6/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/f/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/5/',
      'http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/r/'
    ];

    var result = atResource.getImageUrls(stockRef, 350);

    expect(result.length).toBe(images350.length);

    images350.forEach(function(expectedItem){
      expect(result).toContain(expectedItem);
    });

    result = atResource.getImageUrls(stockRef, 800);

    expect(result.length).toBe(images800.length);

    images800.forEach(function(expectedItem){
      expect(result).toContain(expectedItem);
    });

  });

  it('should convert between links for small to large images', function(){
    var result = atResource.getLargeImageUrl('http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/350/i/');

    expect(result).toBe('http://imagecache.arnoldclark.com/imageserver/AKRNNCB6F5-WUS1/800/i/');
  });


});
