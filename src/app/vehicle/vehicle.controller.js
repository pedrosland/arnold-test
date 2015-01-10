'use strict';

angular.module('arnoldTest')
  .controller('VehicleCtrl', function($scope, $routeParams){

    $scope.stockRef = $routeParams.stockRef;
    $scope.registration = $routeParams.registration;

  });
