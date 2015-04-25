'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '',
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
