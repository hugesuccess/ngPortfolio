'use strict';

angular.module('hugesuccessApp')
  .controller('FooterCtrl', function ($scope, blogroll, links, quote) {
      blogroll.get(function(err, data) {
        $scope.blogroll = data;
      });

      links.get(function(err, data) {
        $scope.links = data;
      });

      quote.get(function(err, data) {
          console.log(data);
        $scope.quote = data;
      });
  });
