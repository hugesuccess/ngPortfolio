'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.teach', {
        url: '/teach',
        templateUrl: 'app/teach/teach.html',
        controller: 'TeachCtrl'
      });
  });
