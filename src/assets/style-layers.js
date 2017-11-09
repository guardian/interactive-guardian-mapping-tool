var styleLayers = [
    {
            "id": "background",
            "type": "background",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "background-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsl(0, 0%, 95%)"
                        ],
                        [
                            12,
                            "hsl(0, 0%, 95%)"
                        ],
                        [
                            12.1,
                            "hsl(0, 0%, 100%)"
                        ],
                        [
                            22,
                            "hsl(0, 0%, 100%)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "water",
            "type": "fill",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "water",
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsl(0, 0%, 100%)"
                        ],
                        [
                            12,
                            "hsl(0, 0%, 100%)"
                        ],
                        [
                            12.1,
                            "hsl(188, 66.7%, 89.4%)"
                        ],
                        [
                            22,
                            "hsl(188, 66.7%, 89.4%)"
                        ]
                    ]
                }
            }
        },
        {
            "id": "waterway",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "waterway",
            "filter": [
                "==",
                "$type",
                "LineString"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#FFFFFF"
                        ],
                        [
                            12,
                            "#FFFFFF"
                        ],
                        [
                            12.1,
                            "hsl(188, 66.7%, 89.4%)"
                        ],
                        [
                            22,
                            "hsl(188, 66.7%, 89.4%)"
                        ]
                    ]
                }
            }
        },



///////////////HILSHADES///////////////////////////////////////////////////////



    {
        "id": 'hillshade_highlight_bright',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
        "paint": {
                "fill-color": "hsl(0, 0%, 100%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.15
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "fill-antialias": false
        }
    },
    {
        "id": 'hillshade_highlight_med',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
        "paint": {
                "fill-color": "hsl(0, 0%, 100%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.15
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "fill-antialias": false
            }
    },
    {
        "id": 'hillshade_shadow_faint',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
        "paint": {
                "fill-color": "hsl(0, 0%, 85%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.07
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
    },
    {
        "id": 'hillshade_shadow_med',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
            "paint": {
                "fill-color": "hsl(0, 0%, 85%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.07
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
    },
    {
        "id": 'hillshade_shadow_dark',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
            "paint": {
                "fill-color": "hsl(0, 0%, 85%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.08
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
    },
    {
        "id": 'hillshade_shadow_extreme',
        'type': 'fill',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-terrain-v2"
        },
        "source-layer": "hillshade",
        "layout": {
                "visibility": "visible"
        },
            "paint": {
                "fill-color": "hsl(0, 0%, 65%)",
                "fill-opacity": {
                    "stops": [
                        [
                            15,
                            0.08
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
    },




///////////////GREEN AREAS///////////////////////////////////////////////////////




    {
        "id": "parks",
        "type": "fill",
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "minzoom": 0,
        "filter": [
            "==",
            "class",
            "park"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#E3F0E1",
                "fill-opacity": 0.65
        }
    },
    {
        "id": "national_park",
        "type": "fill",
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse_overlay",
        "filter": [
            "==",
            "class",
            "national_park"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "#E3F0E1",
            "fill-opacity": 0.65
        }
    },
    




///////////////DWELLING///////////////////////////////////////////////////////




    {
        "id": "industrial",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "industrial"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(0, 0%, 92%)"
        }
    },
    {
        "id": "school",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "school"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(0, 0%, 90%)"
        }
    },
    {
        "id": "hospital",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "landuse",
        "filter": [
            "==",
            "class",
            "hospital"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(0, 0%, 90%)"
        }
    },
    {
        "id": "building",
        "type": "fill",
        "metadata": {
            "mapbox:group": "ca04ef99f8afacb76427cae88440bb05"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "building",
        "minzoom": 11.1,
        "filter": [
            "==",
            "$type",
            "Polygon"
        ],
        "layout": {
            "visibility": "visible"
        },
        "paint": {
            "fill-color": "hsl(0, 0%, 90%)",
            "fill-opacity": 1,
            "fill-translate-anchor": "viewport"
        }
    },
        



///////////////ROADS///////////////////////////////////////////////////////


    {
            "id": "Motorways",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway",
                    "motorway_link",
                    "trunk"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#dadada",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            10.1,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "primary-road",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "class",
                    "primary"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#dadada",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            10,
                            1
                        ],
                        [
                            10.1,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "secondary-road",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "mini_roundabout",
                    "secondary"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#dadada",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.7
                        ],
                        [
                            10,
                            0.7
                        ],
                        [
                            10.1,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "streets",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "in",
                    "class",
                    "construction",
                    "golf",
                    "level_crossing",
                    "path",
                    "pedestrian",
                    "street",
                    "street_limited",
                    "tertiary",
                    "track",
                    "turning_circle",
                    "turning_loop"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#dadada",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.2
                        ],
                        [
                            10,
                            0.2
                        ],
                        [
                            10.1,
                            0.7
                        ]
                    ]
                }
            }
        },
        {
            "id": "rail-roads",
            "type": "line",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
            },
            "source-layer": "road",
            "filter": [
                "all",
                [
                    "all",
                    [
                        "in",
                        "class",
                        "",
                        "level_crossing",
                        "major_rail",
                        "minor_rail"
                    ],
                    [
                        "in",
                        "type",
                        "monorail",
                        "rail"
                    ]
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#B3B3B4",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            .5
                        ],
                        [
                            10,
                            .5
                        ],
                        [
                            10.1,
                            1
                        ]
                    ]
                }
            }
        },
    

///////////////BOUNDARIES///////////////////////////////////////////////////////

    {
        "id": 'admin-3-4-boundaries',
        'type': 'line',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-streets-v7"
        },
        "source-layer": "admin",
        "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
        },
        "paint": {
                "line-opacity": 1,
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            10,
                            2
                        ],
                        [
                            10.1,
                            2
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                },
        "line-color": "#B3B3B4",
        "line-dasharray": [1, 2]
        },
        "layout": {
                "visibility": "visible"
            },
        "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
},


    {
        "id": 'admin-3-4-boundaries',
        'type': 'line',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-streets-v7"
        },
        "source-layer": "admin",
        "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "none"
        },
        "paint": {
                "line-opacity": 1,
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            10,
                            2
                        ],
                        [
                            10.1,
                            2
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                },
        "line-color": "#B3B3B4",
        "line-dasharray": [1, 2]
        },
        "layout": {
                "visibility": "visible"
            },
        "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
},
{
        "id": 'admin-2-boundaries',
        'type': 'line',
        'source': {
            'type': 'vector',
            "url": "mapbox://mapbox.mapbox-streets-v7"
        },
        "source-layer": "admin",
        "layout": {
                "line-join": "round",
                "line-cap": "round",
                "visibility": "visible"
        },
        "paint": {
                "line-opacity": 1,
                "line-width": 1.5,
                "line-color": "#B3B3B4"
        },
        "layout": {
                "visibility": "visible"
        },
        "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "disputed",
                    0
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
    },
    {
        "id": "admin-2-boundaries-dispute",
        "type": "line",
        "metadata": {
            "mapbox:group": "1444934295202.7542"
        },
        "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
        "source-layer": "admin",
        "minzoom": 1,
        "filter": [
            "all",
            [
                "==",
                "admin_level",
                2
            ],
            [
                "==",
                "disputed",
                1
            ],
            [
                "==",
                "maritime",
                0
            ]
        ],
        "layout": {
            "line-join": "round",
            "visibility": "visible",
            "line-round-limit": 1
        },
        "layout": {
                "visibility": "visible"
        },
        "paint": {
            "line-dasharray": [
                0.8,
                2
            ],
            "line-color": "#A8B0B2",
            "line-width":
            {
                "stops": [
                        [
                            1,
                            2
                        ],
                        [
                            11,
                            3
                        ]
                    ]
            },
            "line-opacity": 1,
            "line-gap-width": 0
        }
    },



///////////////////////LABELS/////////////////////////////////////////////////
    {
            "id": "place-village",
            "type": "symbol",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "minzoom": 8,
            "maxzoom": 15,
            "filter": [
                "==",
                "type",
                "village"
            ],
            "layout": {
                "text-size": 14,
                "icon-image": "city-town-icon",
                "text-font": [
                    "DS3 Display Sans Regular"
                ],
                "text-justify": "left",
                "visibility": "visible",
                "text-offset": [
                    0.6,
                    0
                ],
                "text-anchor": "left",
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "text-color": "#909090"
            }
        },
        {
            "id": "place-town",
            "type": "symbol",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "minzoom": 6,
            "maxzoom": 15,
            "filter": [
                "==",
                "type",
                "town"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            14
                        ],
                        [
                            10,
                            14
                        ],
                        [
                            11,
                            20
                        ],
                        [
                            22,
                            20
                        ]
                    ]
                },
                "icon-image": "city-town-icon",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            [
                                "DS3 Display Sans Regular"
                            ]
                        ],
                        [
                            10,
                            [
                                "DS3 Display Sans Regular"
                            ]
                        ],
                        [
                            11,
                            [
                                "DE4 Display Egyptian Medium Regular"
                            ]
                        ]
                    ]
                },
                "text-justify": "left",
                "text-padding": 0,
                "visibility": "visible",
                "text-offset": [
                    0.6,
                    0
                ],
                "icon-size": 1,
                "text-anchor": "top-left",
                "text-field": "{name_en}",
                "icon-padding": 0,
                "text-max-width": 7
            },
            "paint": {
                "icon-opacity": 1,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "text-color": "#999999",
                "text-translate-anchor": "viewport"
            }
        },
        {
            "id": "place-island",
            "type": "symbol",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "maxzoom": 16,
            "filter": [
                "==",
                "type",
                "island"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": 14,
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DS3 Display Sans Regular"
                ],
                "text-padding": 2,
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ],
                "text-rotation-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 7
            },
            "paint": {
                "text-halo-width": 0,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-color": "#999999"
            }
        },
        {
            "id": "place-city-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "!in",
                    "scalerank",
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "layout": {
                "text-size": 20,
                "icon-image": "dot-9",
                "text-font": [
                    "DE4 Display Egyptian Medium Regular"
                ],
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ],
                "text-max-width": 90,
                "text-field": "{name_en}",
                "text-anchor": "bottom"
            },
            "paint": {
                "text-color": "#909090",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "icon-opacity": 0,
                "text-translate-anchor": "viewport"
            }
        },
        {
            "id": "place-city-md-s",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SE",
                    "SW"
                ],
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "icon-image": "dot-10",
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ],
                "text-font": [
                    "DE4 Display Egyptian Medium Regular"
                ],
                "text-size": 16
            },
            "paint": {
                "text-halo-width": 0,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-color": "#909090",
                "text-halo-blur": 0,
                "icon-opacity": 0
            }
        },
        {
            "id": "place-city-md-n",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "NE",
                    "NW",
                    "W"
                ],
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5
                ]
            ],
            "layout": {
                "icon-image": "dot-10",
                "text-font": [
                    "DE4 Display Egyptian Medium Regular"
                ],
                "text-offset": [
                    0,
                    0
                ],
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-max-width": 7,
                "text-size": 18
            },
            "paint": {
                "text-color": "#909090",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "icon-opacity": 0,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-city-lg-s",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    2
                ],
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SE",
                    "SW"
                ]
            ],
            "layout": {
                "text-line-height": 0,
                "text-size": 20,
                "icon-image": "dot-11",
                "text-font": [
                    "DE4 Display Egyptian Medium Regular"
                ],
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ],
                "text-anchor": "bottom",
                "text-field": "{name_en}",
                "text-max-width": 0
            },
            "paint": {
                "text-color": "#909090",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "icon-opacity": 0,
                "text-halo-blur": 0,
                "text-translate-anchor": "viewport"
            }
        },
        {
            "id": "place-city-lg-n",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444862510685.128"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "place_label",
            "minzoom": 1,
            "maxzoom": 14,
            "filter": [
                "all",
                [
                    "<=",
                    "scalerank",
                    2
                ],
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "N",
                    "NE",
                    "NW",
                    "W"
                ]
            ],
            "layout": {
                "text-size": 20,
                "icon-image": "city-town-icon",
                "text-font": [
                    "DE4 Display Egyptian Medium Regular"
                ],
                "visibility": "visible",
                "text-offset": [
                    0,
                    0
                ],
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "#909090",
                "text-opacity": 1,
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "icon-opacity": 0,
                "text-halo-blur": 0
            }
        },
        {
            "id": "country-label-sm",
            "group": "country",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 10,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 6,
                "text-font": [
                    "DE5 Display Egyptian SemiBold Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            14
                        ],
                        [
                            6,
                            18
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-color": "rgba(128,128,128,1)",
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 0,
                "text-translate-anchor": "viewport"
            }
        },
        {
            "id": "country-label-md",
            "group": "country",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 8,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "layout": {
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{code}"
                        ],
                        [
                            2,
                            "{name_en}"
                        ]
                    ]
                },
                "text-max-width": 6,
                "text-font": [
                    "DE5 Display Egyptian SemiBold Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            16
                        ],
                        [
                            6,
                            21
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-color": "rgba(128,128,128,1)",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 0
            }
        },
        {
            "id": "country-label-lg",
            "group": "country",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1444856144497.7825"
            },
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "filter": [
                "in",
                "scalerank",
                1,
                2
            ],
            "layout": {
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{name_en}"
                        ],
                        [
                            22,
                            "{name_en}"
                        ]
                    ]
                },
                "text-max-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            5
                        ],
                        [
                            3,
                            6
                        ]
                    ]
                },
                "text-font": [
                    "DE5 Display Egyptian SemiBold Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            10
                        ],
                        [
                            6,
                            24
                        ]
                    ]
                },
                "visibility": "visible",
                "text-anchor": "bottom"
            },
            "paint": {
                "text-color": "rgba(128,128,128,1)",
                "text-halo-color": "rgba(255,255,255,0.75)",
                "text-halo-width": 0,
                "text-translate-anchor": "viewport"
            }
        },
        {
            "id": "road-label",
            "type": "symbol",
            "source": {
            "url": "mapbox://mapbox.mapbox-streets-v7",
            "type": "vector"
        },
            "source-layer": "road_label",
            "layout": {
                "visibility": "visible",
                "text-field": "{name}",
                "text-font": [
                    "DS3 Display Sans Regular"
                ],
                "text-size": 14,
                "text-line-height": 1,
                "text-anchor": "left",
                "text-justify": "left",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "#808080"
            }
        }

]