/*
var staticMapUrl = require('static-google-map').staticMapUrl();


module.exports.staticUrl = function () {
    const url = staticMapUrl({
        key: process.env.GOOGLE_MAPS_API_KEY,
        scale: 1,
        size: '400x400',
        format: 'png',
        maptype: 'roadmap',
        markers: [
            {
                location: process.env.ll,
                color: 'purple',
                size: 'tiny'
            },
            {
                location: process.env.LOCATION,
                color: 'red'
            }
        ]
    });

    console.log("[BASE URL]: %j", url);

    return url ; 

}
*/

/*
const osm = require('osm-static-maps');
console.log("OSM WRAPPER ");

module.exports.staticUrl = function osmWrapper(req, res) {
    osm({
        attribution: '  ',
        zoom: 100,
        geojson: {
            "type": "FeatureCollection",
            "features": [
                // {
                //   "type": "Feature",
                //   "geometry": {
                //     "type": "Polygon",
                //     "coordinates": toRectangle(req.body.point1, req.body.point2)
                //   }
                // },2
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": process.env.ll
                    }
                },

            ]
        },
        style: {
            // "opacity": 0,
            // "fillOpacity": 0
        }
    }).then(image => {
        //res.contentType('image/png')
        //res.send(image)
        return image
    }).catch(err => {
        //res.status(500).send("Сломалось")
        console.log("ERROR BUILDING MAP")
        console.log(err)
    });

}
*/