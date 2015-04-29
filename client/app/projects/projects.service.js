'use strict';

angular.module('hugesuccessApp')
  .service('projects', function ($http, $sce) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var projs = [
        {
            "id": 1,
            "title": "TEN Teaching",
            "url": "http://www.10teaching.net",
            "images": [
                {
                    "id": 1,
                    "url": "images/ten-logo.png"
                }
            ],
            "description": "<h1>Is she dead, yes or no?</h1><p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p><h1>Are you ready for the truth?</h1><p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p><h1>I can do that</h1><p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p><h1>Are you ready for the truth?</h1><p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p><h1>Are you ready for the truth?</h1><p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p><h1>I'm serious as a heart attack</h1><p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.</p><h1>I'm serious as a heart attack</h1><p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p><h1>Are you ready for the truth?</h1><p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.</p><div style=display:none><a href=http://slipsum.com>lorem ipsum</a></div>"
        },
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
            "description": "<h1>This is injected HTML</h1>"
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
