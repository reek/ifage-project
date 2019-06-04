function init_map() {
    var myOptions = {
        zoom: 13,
        center: new google.maps.LatLng(46.21260119999999, 6.142913700000008),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        draggable: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        streetViewControl: false,
        styles: [{
                "featureType": "landscape",
                "stylers": [{
                        "hue": "#F600FF"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [{
                        "hue": "#DE00FF"
                    },
                    {
                        "saturation": -4.6000000000000085
                    },
                    {
                        "lightness": -1.4210854715202004e-14
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [{
                        "hue": "#FF009A"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [{
                        "hue": "#FF0098"
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [{
                        "hue": "#EC00FF"
                    },
                    {
                        "saturation": 72.4
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [{
                        "hue": "#7200FF"
                    },
                    {
                        "saturation": 49
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);
    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.BOUNCE,
        position: new google.maps.LatLng(46.21260119999999, 6.142913700000008)
    });
}
google.maps.event.addDomListener(window, 'load', init_map);