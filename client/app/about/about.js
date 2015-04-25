'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });
