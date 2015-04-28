'use strict';

angular.module('hugesuccessApp')
  .service('links', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var lks =[
        {
            "title": "Microsoft Office Tips & Tricks",
            "url": "https://www.microsoft.com/southafrica/newsletters/examples/officett_april.htm"
        },
        {
            "title": "Microsoft Office Sharepoint Server",
            "url": "https://msdn.microsoft.com/en-us/library/office/dn833469"
        },
        {
            "title": "Microsoft Office 2008",
            "url": "https://products.office.com/en-US/"
        },
        {
            "title": "Microsoft Office UC",
            "url": "https://products.office.com/en-us/home"
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
