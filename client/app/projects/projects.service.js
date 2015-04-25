'use strict';

angular.module('hugesuccessApp')
  .service('projects', function ($http, $sce) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
        all: function(page, cb) {
            $http.get("assets/json/projects.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                });
        },
        getOne: function(id, cb) {
            $http.get("assets/json/projects.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    var res = data[id - 1];
                    res.description = $sce.trustAsHtml(res.description);
                    return cb(null, res);
                })
        }
    }
  });
