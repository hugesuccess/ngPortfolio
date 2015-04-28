'use strict';

angular.module('hugesuccessApp')
  .service('navbar', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
        get: function(cb) {
            $http.get("assets/json/navbar.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                });
        }
    };
  });