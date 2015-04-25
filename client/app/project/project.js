'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.project', {
        url: '/project/:id',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
