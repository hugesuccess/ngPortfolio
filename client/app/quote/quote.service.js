'use strict';

angular.module('hugesuccessApp')
  .service('quote', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var qt ={
        "body": "The best teams, with the biggest budgets and the longest schedules, now build applications in JavaScript that run on the client. These apps have stellar interfaces. They don't reload pages. They are reactive: changes from any client immediately appear on everyone's screen.",
        "author": "Meteor Development Team",
        "link": "http://docs.meteor.com"
    };

    return {
        get: function(cb) {
            return cb(null, qt);

            /*$http.get("assets/json/quote.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                })*/
        }
    }
  });
