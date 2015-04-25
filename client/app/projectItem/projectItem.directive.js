'use strict';

angular.module('hugesuccessApp')
  .directive('projectItem', function () {
    return {
      templateUrl: 'app/projectItem/projectItem.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
          scope.scrollTop = function() {
            window.scrollTo(0,0);
          };
      }
    };
  });
