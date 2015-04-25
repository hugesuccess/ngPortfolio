'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      });
  });
