'use strict';

angular.module('hugesuccessApp')
  .controller('ProjectCtrl', function ($scope, $stateParams, projects) {
      projects.getOne($stateParams.id, function(err, data) {
      console.log(data)
        $scope.project = data;
        $scope.copy = data.description;
    })
  });
