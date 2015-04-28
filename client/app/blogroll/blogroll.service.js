'use strict';

angular.module('hugesuccessApp')
  .service('blogroll', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var br = [
        {
            "title": "EventedMind",
            "link": "http://www.eventedmind.com"
        },
        {
            "title": "Badass JavaScript",
            "link": "http://www.badassjs.com"
        },
        {
            "title": "Meteor",
            "link": "http://www.meteor.com"
        },
        {
            "title": "NCZOnline",
            "link": "http://www.nczonline.net"
        },
        {
            "title": "Crockford",
            "link": "http://www.javascript.crockford.com"
        },
        {
            "title": "How to Node",
            "link": "http://www.howtonode.org"
        },
        {
            "title": "Oaklandjs",
            "link": "http://www.oaklandjs.com"
        }
    ];
    return {
        get: function(cb) {
            return cb(null, br);
            $http.get("assets/json/blogroll.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                });
        }
    };
  });
