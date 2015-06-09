'use strict';

angular.module('hugesuccessApp')
  .service('links', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var lks =[
        {
            "title": "TEN Teaching",
            "url": "http://www.10teaching.net"
        },
        {
            "title": "DEVLabs",
            "url": "http://devla.bs/"
        },
        {
            "title": "Vibosity",
            "url": "http://www.vibosity.com/"
        },
        {
            "title": "Microsoft Office Tips & Tricks",
            "url": "https://www.microsoft.com/southafrica/newsletters/examples/officett_april.htm"
        },
        {
            "title": "Microsoft Office Sharepoint Server",
            "url": "https://msdn.microsoft.com/en-us/library/office/dn833469"
        },
        {
            "title": "Coors Light",
            "url": "http://www.coorslight.com"
        },
        {
            "title": "General Motors",
            "url": "http://www.gm.com"
        },
        {
            "title": "Procter & Gambel",
            "url": "http://www.pg.com"
        }
    ];

    return {
        get: function(cb) {
            return cb(null, lks);
            $http.get("assets/json/links.json", {cache: true})
                .error(function(err) {
                    return cb(err, null);
                })
                .success(function(data) {
                    return cb(null, data);
                });
        }
    };
  });
