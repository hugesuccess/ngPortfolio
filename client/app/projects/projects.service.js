'use strict';

angular.module('hugesuccessApp')
  .service('projects', function ($http, $sce) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var projs = [
        {
            "id": 2,
            "title": "theblocks",
            "url": "http://www.theblocks.tv",
            "images": [
                {
                    "id": 2,
                    "url": "images/theblocks.gif"
                }
            ],
            "description": "<h1>Watch videos from your desktop or mobile device.</h1><p>theblocks is an experiment in signaling servers. Navigate to theblocks from your desktop and mobile device simultaneously, to use your mobile phone as a remote control and select songs from a constantly updating new stream of the latest edm, hip-hop, house  and dance music videos hand chosen by some of the most interesting people on the internet.</p>"
        },
        {
            "id": 3,
            "title": "Instamatic",
            "url": "http://instamatic.meteor.com",
            "images": [
                {
                    "id": 3,
                    "url": "images/instamatic.png"
                }
            ],
            "description": "<h1>This is injected HTML</h1>"
        },
        {
            "id": 4,
            "title": "Bittape",
            "url": "http://www.bittape.com",
            "images": [
                {
                    "id": 4,
                    "url": "images/bittape.png"
                }
            ],
            "description": "<h1>This is injected HTML</h1>"
        },
        {
            "id": 5,
            "title": "Stratesphere.Js",
            "url": "http://www.stratospherejs.com",
            "images": [
                {
                    "id": 5,
                    "url": "images/stratospherejs.jpg"
                }
            ],
            "description": "<h1>This is injected HTML</h1>"
        }
    ];
    return {
        all: function(page, cb) {
            return cb(null, projs);
            /*
            $http.get("assets/json/projects.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                });*/
        },
        getOne: function(id, cb) {
            var res = projs[id - 1];
            res.description = $sce.trustAsHtml(res.description);
            return cb(null, res)
            /*$http.get("assets/json/projects.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    var res = data[id - 1];
                    res.description = $sce.trustAsHtml(res.description);
                    return cb(null, res);
                })*/
        }
    }
  });
