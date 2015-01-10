'use strict';

angular.module('arnoldTest')
  .controller('VehicleCtrl', function($scope, $routeParams, atResource){

    var obfuscatedRef = atResource.getObfuscatedStockReference($routeParams.stockRef, $routeParams.registration);

    $scope.imageUrls = atResource.getImageUrls(obfuscatedRef, 350);

  });
