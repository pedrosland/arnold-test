'use strict';

angular.module('arnoldTest')
  .controller('MainCtrl', function ($scope, $location) {

    $scope.showVehicle = function(vehicle){
      $location.url('/vehicle/' + vehicle.stockRef + '/' + vehicle.registration);
    };

  });
