'use strict';

angular.module('hugesuccessApp')
  .controller('ProjectsCtrl', function ($scope, projects) {
    projects.all(1, function(err, data) {
        $scope.projects = data;
    });
  });
