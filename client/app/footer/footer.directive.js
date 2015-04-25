'use strict';

angular.module('hugesuccessApp')
  .directive('footer', function () {
    return {
      templateUrl: 'app/footer/footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });