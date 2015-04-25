'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.projects', {
        url: '/',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
