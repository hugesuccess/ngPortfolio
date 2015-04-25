'use strict';

angular.module('hugesuccessApp')
  .directive('navbar', function () {
    return {
      templateUrl: 'app/navbar/navbar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $('.menu-link')
            .click(function() {
                $(".menu-link i")
                    .toggleClass("fa-angle-double-left fa-angle-double-right");
            })
            .bigSlide({
                menuWidth: '4em'
            });
        scope.close = function() {
                $(".menu-link")
                    .click();
        };
      }
    };
  });
