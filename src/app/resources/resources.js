'use strict';

angular.module('at.resources', [])
  .factory('atResource', function(){

    /**
     * Compute obfuscated stock reference
     *
     * @param stockRef     {string} Stock reference
     * @param registration {string} Registration
     * @return {string} Obfuscated stock reference
     */
    function getObfuscatedStockReference(stockRef, registration){
      stockRef = stockRef.split('');
      var reverseReg = registration.split('').reverse();

      var obfuscated = [];

      reverseReg.forEach(function(regChar, i){
        obfuscated.push(stockRef[i], regChar);
      });

      obfuscated.push(stockRef[stockRef.length - 2]);

      return obfuscated.join('');
    }

    return {
      getObfuscatedStockReference: getObfuscatedStockReference,
      /**
       * Get image URLs for a vehicle
       *
       * @param obfuscatedStockReference {String}
       * @param size                     {Number=}
       * @returns {String[]} URLs
       */
      getImageUrls: function(obfuscatedStockReference, size){
        var sizes = [350, 800];
        var cameras = ['f', 'i', 'r', '4', '5', '6'];

        if(size){
          sizes = [size];
        }

        return sizes.map(function(size){
          return cameras.map(function(camera){
            return 'http://imagecache.arnoldclark.com/imageserver/' + obfuscatedStockReference + '/' + size + '/' + camera + '/';
          });
        }).reduce(function(result, sizeArr){
          return Array.prototype.concat.call(result, sizeArr);
        }, []);
      }
    };

  });
