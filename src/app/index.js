'use strict';

angular.module('arnoldTest', ['ngAnimate', 'ngTouch', 'ngRoute', 'mm.foundation'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/vehicle/:stockRef/:registration', {
        templateUrl: 'app/vehicle/vehicle.html',
        controller: 'VehicleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
