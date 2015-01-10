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
      return 'AVRNNDF6H0-OUS2';
    }

    return {
      getObfuscatedStockReference: getObfuscatedStockReference,
      /**
       * Get image URLs for a vehicle
       *
       * @param obfuscatedStockReference {String}
       * @returns {String[]} URLs
       */
      getImageUrls: function(obfuscatedStockReference){
        var sizes = [350, 800];
        var cameras = ['f', 'i', 'r', '4', '5', '6'];

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
