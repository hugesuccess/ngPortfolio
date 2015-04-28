'use strict';

angular.module('hugesuccessApp')
  .service('navbar', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var nv = [
        {
            "title": "Portfolio",
            "link": "/",
            "icon": "fa fa-home"
        },
        {
            "title": "About",
            "link": "/about",
            "icon": "fa fa-bolt"
        },
        {
            "title": "Teaching",
            "link": "/teach",
            "icon": "fa fa-cutlery"
        },
        {
            "title": "Contact",
            "link": "/contact",
            "icon": "fa fa-save"
        }
    ];
    return {
        get: function(cb) {
            return cb(null, nv);
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
