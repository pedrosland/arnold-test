'use strict';

angular.module('arnoldTest')
  .controller('VehicleCtrl', function($scope, $routeParams, atResource){

    var obfuscatedRef = atResource.getObfuscatedStockReference($routeParams.stockRef, $routeParams.registration);
    $scope.imageUrls = atResource.getImageUrls(obfuscatedRef, 350);

    $scope.currentImageUrl = '';

    /**
     * Set the URL of the full size image
     *
     * @param url {string} Image URL
     */
    $scope.setCurrentImage = function(url){
      // Assume that the full sized image is available if the thumb is available
      $scope.currentImageUrl = url.replace(/\/350\//, '/800/');
    };

  });
