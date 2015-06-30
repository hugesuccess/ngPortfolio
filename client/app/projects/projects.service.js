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
            "description": "<h1>The latest music at the touch of your fingertips</h1><p>theblocks is an experiment in signaling servers. Navigate to theblocks from your desktop and mobile device simultaneously, to use your mobile phone as a remote control and select songs from a constantly updating new stream of the latest edm, hip-hop, house  and dance music videos hand chosen by some of the most interesting people on the internet.</p>"
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
            "description": "<h1>A beautiful Instagram client</h1><p>Instamatic uses the Instagram api to create a beautifully designed, feature rich Instagram client. It included login/ logout, and like functionality.</p><p>Instamatic uses the Instagram real time stream, which opens a persistant connection with the Instagram server, which is the key technology which enables endless scroll.</p><p>Use Instagram's API to search by user id or hashtag, just click the icon to toggle your search.</p>"
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
            "description": "<h1>This is injected HTML</h1><p>Bittape collects all the songs you love from your favorite music blogs from all different types of genres. Now you don't have to constantly search for new music, Bittape brings all the latest music directly to you.</p><p>With Bittape you can play any song you want whenever you want.  Create an infinite number of playlists and easily add new songs just by drag and drop.</p><p>Search for your favorite song, or just let the songs from your favorite blog play along.</p><p>Check it out today.</p>"
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
            "description": "<h1>Elegent sites made easy</h1><p>Purchase designer themes and templates for angular and meteor.js projects. Create an application with a professional look and feel in hours, not days and weeks.</p>"
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
            var res = _.filter(projs, function(pro) {
                return pro.id == id;
            })[0];
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
