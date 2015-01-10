'use strict';

angular.module('arnoldTest')
  .controller('NavbarCtrl', function ($scope, $location) {

    function updateShowHome(){
      $scope.showHome = $location.path() !== '/';
    }

    $scope.showHome = updateShowHome();

    $scope.$on('$routeChangeSuccess', updateShowHome);
  });
