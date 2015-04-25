'use strict';

angular.module('hugesuccessApp')
  .controller('NavbarCtrl', function ($scope, navbar) {
      navbar.get(function(err, data) {
        console.log(data);
        $scope.navigation = data;
      })
  });
