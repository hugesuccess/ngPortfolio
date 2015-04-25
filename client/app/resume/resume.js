'use strict';

angular.module('hugesuccessApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.resume', {
        url: '/411',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl'
      });
  });
