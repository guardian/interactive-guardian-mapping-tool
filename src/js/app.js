import * as d3B from 'd3/index'
import * as d3Select from 'd3-selection'
import * as d3Queue from 'd3-queue'
import * as topojson from 'topojson'
import * as d3geo from 'd3-geo'
import * as d3gp from 'd3-geo-projection'

var d3 = Object.assign({}, d3B, d3Select, d3Queue, d3geo);

var width = 620;
var height = 469;
var lat = 51.4684055;
var lng = -2.7307918;
var zoom =3;
var center;
var pitch;
var bearing;
var api = "https://api.mapbox.com/"
var mapboxStyle = "styles/v1/guardian/cj849befy0k092qmnn3p6onkx/static/";
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg';
var dpi = 120;


var transform = d3geo.geoTransform({point: projectPoint});
var path = d3.geoPath().projection(transform);

    function projectPoint(lon, lat) {
        var point = map.project(new mapboxgl.LngLat(lon, lat));
        this.stream.point(point.x, point.y);
    }

/*var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", width + "px");
    svg.setAttribute("height", height + "px");

var svgNS = svg.namespaceURI;
    document.getElementById("labels").appendChild(svg);*/

Object.defineProperty(window, 'devicePixelRatio', {
    get: function() {return dpi / 96}
});

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/guardian/cj849befy0k092qmnn3p6onkx?aisdbaAaaa', // stylesheet location
    center: [lng,lat], // starting position [lng, lat]
    zoom: zoom,
    preserveDrawingBuffer: true
});


/*var geoInfo = new mapboxgl.Map({
    container: 'geoInfo', // container id
    style: 'mapbox://styles/guardian/cj85u199220222rryrx4741f2', // stylesheet location
    center: [lng,lat], // starting position [lng, lat]
    zoom: zoom
});*/

var blank = document.createElement("div");
blank.className = "blank";
var controlContainer = document.getElementsByClassName("mapboxgl-map")[0];
controlContainer.appendChild(blank)


map.on('zoom', function(){/*console.log(map.getZoom())*/})


map.on('load', function () {

    map.addLayer(styleLayers[0])

    styleLayers.forEach(function(feature){

        var layerID = feature['id'];
        if (!map.getLayer(layerID))
        {
            map.addLayer(feature)
        }
        
    })
    map.addLayer({
        'id': 'constituencies',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': constituencies
        },
        'paint': {
            'fill-color': {
                property: 'Artificial Intelligence job losses - Sheet1_jobs',
                stops: [
                    [0.21823, '#F2F12D'],
                    [0.25308, '#EED322'],
                    [0.28794, '#E6B71E'],
                    [0.32280, '#DA9C20'],
                    [0.35766, '#CA8323']
                ]
            },
            'fill-outline-color': 'rgb(255, 255, 255)',
            'fill-opacity': 0.75
        }
    }, 'hillshade_highlight_bright');

   /* map.addLayer({
        'id': 'iraq-oilfields',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': oilfields
        },
        'layout':{
            'visibility':'visible'
        },
        'paint': {
            'fill-color': 'rgba(200, 100, 240, 0.4)',
            'fill-outline-color': 'rgba(200, 100, 240, 1)'
        }
    }, 'water');


    var russia =
[
    {city:'Saint Petersburg', coordinates:[30.0448829,59.9174925]},
    {city:'Ekaterinburg', coordinates:[60.5148513,56.8140005]},
    {city:'Nizhny Novgorod', coordinates:[43.7866629,56.2928515]},
    {city:'Kazan', coordinates:[48.9332207,55.7956149]},
    {city:'Moscow', coordinates:[37.3523177,55.7498598]},
    {city:'Kaliningrad', coordinates:[20.3244475,54.7117271]},
    {city:'Saransk', coordinates:[45.1052694,54.1973332]},
    {city:'Samara', coordinates:[49.9178981,53.2609904]},
    {city:'Volgograd', coordinates:[44.2265258,48.6705332]},
    {city:'Rostov-on-don', coordinates:[39.4879164,47.2611562]},
    {city:'Sochi', coordinates:[39.655089,43.6018244]}
]

    russia.forEach(function(marker) {

        var x = map.project(marker.coordinates).x;
        var y = map.project(marker.coordinates).y; 

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat(marker.coordinates)
      .addTo(map);

       
});
    map.addLayer({
        'id': 'population',
        'type': 'circle',
        'source': {
            type: 'vector',
            url: 'mapbox://examples.8fgz4egr'
        },
        'source-layer': 'sf2010',
        "layout": {
                "visibility": "visible"
        },
        'paint': {
            // make circles larger as the user zooms from z12 to z22
            'circle-radius': {
                'base': 1.75,
                'stops': [[12, 2], [22, 180]]
            },
            // color circles by ethnicity, using data-driven styles
            'circle-color': {
                property: 'ethnicity',
                type: 'categorical',
                stops: [
                    ['White', '#fbb03b'],
                    ['Black', '#223b53'],
                    ['Hispanic', '#e55e5e'],
                    ['Asian', '#3bb2d0'],
                    ['Other', '#ccc']]
            }
        }
    }, 'Bridges');*/
})


window.addExternalLayer = function addExternalLayer(id, coordinates, fillColor='#333333', opacity=1, lineColor="#000000", lineWidth=1, lineDashArray=[0,0])
{
   map.addLayer({
        'id': id,
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    "coordinates": coordinates
                }
            }
        },
        "layout": {
                "visibility": "visible"
        },
        'paint': {
            'line-color': lineColor,
            'line-width': lineWidth,
            'line-dasharray': lineDashArray
        }
    }, 'water');


    map.addLayer({
        'id': 'myanmar-line',
        'type': 'line',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    "coordinates": [ [ [ 92.283055760467462, 20.982173695493493 ], [ 92.218349550641733, 21.135457659884931 ], [ 92.183507745350951, 21.158668710804768 ], [ 92.193462546862605, 21.186517168386679 ], [ 92.213372149885899, 21.205079892960203 ], [ 92.213372149885899, 21.214360380481757 ], [ 92.213372149885899, 21.274669318480239 ], [ 92.193462546862605, 21.29785848801636 ], [ 92.198439947618411, 21.321043999361653 ], [ 92.223326951397539, 21.3442258492971 ], [ 92.233281752909178, 21.358133200443636 ], [ 92.248213955176681, 21.358133200443636 ], [ 92.258168756688335, 21.372039231630602 ], [ 92.258168756688335, 21.385943942164232 ], [ 92.278078359711614, 21.409115523051828 ], [ 92.293010561979102, 21.427650142912626 ], [ 92.31292016500241, 21.427650142912626 ], [ 92.32287496651405, 21.427650142912626 ], [ 92.327852367269898, 21.446182410018324 ], [ 92.367671573316514, 21.469344432840376 ], [ 92.392558577095627, 21.464712322729007 ], [ 92.417445580874755, 21.446182410018324 ], [ 92.432377783142257, 21.418383126974074 ], [ 92.432377783142257, 21.399847331351051 ], [ 92.432377783142257, 21.381309185435093 ], [ 92.452287386165537, 21.367404034606633 ], [ 92.477174389944693, 21.367404034606633 ], [ 92.492106592212167, 21.362768690869068 ], [ 92.497083992967973, 21.362768690869068 ], [ 92.512016195235461, 21.385943942164232 ], [ 92.536903199014603, 21.385943942164232 ], [ 92.556812802037896, 21.367404034606633 ], [ 92.591654607328678, 21.237559046228387 ], [ 92.616541611107806, 21.24683749076156 ], [ 92.62649641261946, 21.265392627093924 ], [ 92.656360817154408, 21.274669318480239 ], [ 92.68124782093355, 21.279307444888097 ], [ 92.716089626224317, 21.223640284550736 ], [ 92.750931431515113, 21.191158068156696 ], [ 92.780795836050046, 21.154026791622464 ], [ 92.815637641340842, 21.093668608754715 ], [ 92.845502045875818, 21.051867797273044 ], [ 92.865411648899112, 21.042577132875383 ], [ 92.890298652678254, 21.042577132875383 ], [ 92.910208255701548, 21.056512912051421 ], [ 92.925140457969022, 21.070447386392484 ], [ 92.955004862503969, 21.079736310698244 ], [ 93.009756270818059, 21.056512912051421 ], [ 93.054552877620495, 21.051867797273044 ], [ 93.079439881399622, 21.051867797273044 ], [ 93.114281686690404, 21.051867797273044 ], [ 93.134191289713698, 21.03793158330808 ], [ 93.139168690469546, 21.010055244385544 ], [ 93.169033095004494, 20.926394990326742 ], [ 93.203874900295261, 20.889197643959925 ], [ 93.223784503318598, 20.875246261651579 ], [ 93.243694106341906, 20.828732300272048 ], [ 93.283513312388493, 20.786857447773432 ], [ 93.328309919190914, 20.749625600406514 ], [ 93.383061327505033, 20.726351039150014 ], [ 93.457722338842416, 20.689104300076636 ], [ 93.522428548668174, 20.670477499786603 ], [ 93.577179956982249, 20.675134414136163 ], [ 93.607044361517197, 20.661163242691657 ], [ 93.646863567563813, 20.675134414136163 ], [ 93.671750571342926, 20.689104300076636 ], [ 93.681705372854566, 20.726351039150014 ], [ 93.671750571342926, 20.744970974560584 ], [ 93.651840968319632, 20.786857447773432 ], [ 93.651840968319632, 20.828732300272048 ], [ 93.671750571342926, 20.870595512919312 ], [ 93.701614975877888, 20.879896866419919 ], [ 93.756366384191978, 20.870595512919312 ], [ 93.786230788726925, 20.810122690598941 ], [ 93.806140391750247, 20.782203968706348 ], [ 93.836004796285195, 20.758934422306126 ], [ 93.880801403087631, 20.740316205485662 ], [ 93.930575410645901, 20.693760642932773 ], [ 93.970394616692488, 20.665820442629624 ], [ 93.905688406866773, 20.712384584700942 ], [ 93.905688406866773, 20.665820442629624 ], [ 93.920620609134218, 20.628558847474952 ], [ 93.925598009890052, 20.586628647016884 ], [ 93.94053021215754, 20.554008297320696 ], [ 93.950485013669208, 20.540026014726486 ], [ 93.990304219715782, 20.5307037826189 ], [ 94.020168624250772, 20.512057614451052 ], [ 94.055010429541539, 20.44677815665959 ], [ 94.099807036343975, 20.376805098413261 ], [ 94.134648841634757, 20.339473143785661 ], [ 94.154558444658065, 20.292795519087942 ], [ 94.179445448437193, 20.260112811231167 ], [ 94.184422849192998, 20.218082074457751 ], [ 94.20930985297214, 20.166695751022992 ], [ 94.229219455995434, 20.138659708566145 ], [ 94.254106459774562, 20.110618634401654 ], [ 94.254106459774562, 20.063872345016932 ], [ 94.269038662042064, 20.007758407440406 ], [ 94.278993463553704, 19.993726793395513 ], [ 94.333744871867793, 19.956303044856117 ], [ 94.338722272623627, 19.900150780356043 ], [ 94.333744871867793, 19.8533420015447 ], [ 94.333744871867793, 19.811202290580955 ], [ 94.363609276402769, 19.778419237804616 ], [ 94.383518879426063, 19.731574604398819 ], [ 94.393473680937717, 19.675342908361774 ], [ 94.408405883205191, 19.581579571489264 ], [ 94.423338085472651, 19.487761620274775 ], [ 94.453202490007627, 19.417362448445591 ], [ 94.493021696054214, 19.356325155263182 ], [ 94.53781830285665, 19.304660364237019 ], [ 94.557727905879972, 19.271774268337484 ], [ 94.572660108147431, 19.238881571390735 ], [ 94.53781830285665, 19.224782682900219 ], [ 94.52786350134501, 19.19658127685112 ], [ 94.542795703612484, 19.14486614909454 ], [ 94.562705306635777, 19.093134811594883 ], [ 94.587592310414919, 19.083727375223166 ], [ 94.632388917217355, 19.074319404441791 ], [ 94.682162924775625, 19.031976928595434 ], [ 94.707049928554767, 18.989623655844955 ], [ 94.726959531578061, 18.933135865582521 ], [ 94.761801336868842, 18.923719374664881 ], [ 94.776733539136302, 18.881338602555136 ], [ 94.806597943671278, 18.82952531934464 ], [ 94.811575344427112, 18.810680160813391 ], [ 94.771756138380496, 18.791832890661535 ], [ 94.731936932333895, 18.791832890661535 ], [ 94.721982130822212, 18.777696053381209 ], [ 94.761801336868842, 18.744705488776798 ], [ 94.786688340647984, 18.697564928737673 ], [ 94.79166574140379, 18.678705026764447 ], [ 94.761801336868842, 18.650411238790138 ], [ 94.746869134601369, 18.626829478939481 ], [ 94.736914333089715, 18.603244447223624 ], [ 94.771756138380496, 18.560783156345668 ], [ 94.766778737624648, 18.518311296789928 ], [ 94.766778737624648, 18.480549677014146 ], [ 94.781710939892136, 18.442779737609733 ], [ 94.806597943671278, 18.395555636095651 ], [ 94.836462348206226, 18.357767030875859 ], [ 94.856371951229548, 18.32469521504656 ], [ 94.891213756520301, 18.272712446328505 ], [ 94.906145958787789, 18.225441865419782 ], [ 94.891213756520301, 18.159241478861237 ], [ 94.876281554252856, 18.126131869086183 ], [ 94.871304153497007, 18.093015994803011 ], [ 94.871304153497007, 18.064625981154673 ], [ 94.891213756520301, 18.017299097018665 ], [ 94.866326752741188, 17.969959494500166 ], [ 94.856371951229548, 17.941549640189294 ], [ 94.881258955008661, 17.898926307002249 ], [ 94.901168558031983, 17.856292730527144 ], [ 94.911123359543623, 17.813648931913331 ], [ 94.891213756520301, 17.775734768716102 ], [ 94.881258955008661, 17.747293865887983 ], [ 94.881258955008661, 17.714107101395204 ], [ 94.876281554252856, 17.685656415148102 ], [ 94.851394550473714, 17.652458253912339 ], [ 94.811575344427112, 17.628741532605247 ], [ 94.811575344427112, 17.614510001975731 ], [ 94.806597943671278, 17.543335528341668 ], [ 94.80162054291543, 17.486375812293666 ], [ 94.761801336868842, 17.419900259987873 ], [ 94.746869134601369, 17.391403322226513 ], [ 94.736914333089715, 17.372402896644299 ], [ 94.721982130822212, 17.377153187937949 ], [ 94.702072527798933, 17.396153120360385 ], [ 94.682162924775625, 17.391403322226513 ], [ 94.662253321752331, 17.396153120360385 ], [ 94.642343718729009, 17.424649317498993 ], [ 94.612479314194061, 17.438895748674142 ], [ 94.587592310414919, 17.448392751365027 ], [ 94.557727905879972, 17.457889259307475 ], [ 93.149123491981186, 17.70936563350006 ], [ 92.367671573316514, 20.777550346199892 ], [ 92.327852367269898, 20.865944620249198 ], [ 92.288033161223296, 20.926394990326742 ], [ 92.283055760467462, 20.982173695493493 ] ] ]
                }
            }
        },
        "layout": {
                "visibility": "visible",
                'line-join':'round',
                'line-cap':'round'
        },
        'paint': {
            'line-color': '#A8B0B2',
            'line-width': 2,
            'line-dasharray': [0.1,1.5]
        }
    }, 'water');

}

window.toggleById = function toggleById(id)
{
    var v = map.getLayoutProperty(id, 'visibility');
    var toggle = v === 'visible' ? 'none' : 'visible';
    map.setLayoutProperty(id, 'visibility', toggle);

}

window.toggleBySource = function toggleBySource(source)
{

   styleLayers.forEach(function(feature)
    {
        if(feature['source-layer'] === source)
        {
            var id = feature.id
            var v = map.getLayoutProperty(id, 'visibility');
            var toggle = v === 'visible' ? 'none' : 'visible';
            map.setLayoutProperty(id, 'visibility', toggle);
        }      
    })
}

function extraLayer()
{
   var visibility = map.getLayoutProperty('hillshade_highlight_bright', 'visibility');

   if (visibility === 'visible')
    {
        map.setPaintProperty('road-street', 'line-width', 6);
        map.setLayoutProperty('hillshade_highlight_bright', 'visibility', 'none');
        map.setLayoutProperty('hillshade_highlight_med', 'visibility', 'none');
        map.setLayoutProperty('hillshade_shadow_faint', 'visibility', 'none');
        map.setLayoutProperty('hillshade_shadow_med', 'visibility', 'none');
        map.setLayoutProperty('hillshade_shadow_dark', 'visibility', 'none');
        map.setLayoutProperty('hillshade_shadow_extreme', 'visibility', 'none');
        this.className = '';
    }
    else
    {
        this.className = 'active';
        map.setLayoutProperty('road-motorway', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_highlight_bright', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_highlight_med', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_shadow_faint', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_shadow_med', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_shadow_dark', 'visibility', 'visible');
        map.setLayoutProperty('hillshade_shadow_extreme', 'visibility', 'visible');
    }
}

window.onresize = function onResize()
{
    //width = window.innerWidth;
    removeLabels();
}



var miles = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 120,
    unit: 'imperial'
}));

var km = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 120,
    unit: 'metric'
}));

function update(e)
{
    center = map.getCenter();
    zoom = map.getZoom();
    pitch = map.getPitch();
    bearing = map.getBearing();
    lat = center.lat;
    lng = center.lng;

  /*  geoInfo.jumpTo({
        center: [center.lng, center.lat],
        zoom:zoom,
        pitch:pitch,
        bearing:bearing
    });*/

     document.getElementById("geoInfo").style.visibility='visible';
}

map.on("moveend", update)

map.on('mousedown', function(event)
{
    document.getElementById("geoInfo").style.visibility='hidden';
})

map.on('zoomstart', function(event)
{
    document.getElementById("geoInfo").style.visibility='hidden';
})

function takeScreenShot()
{
    var img = map.getCanvas().toDataURL();

    var svgimg = document.createElementNS('http://www.w3.org/2000/svg','image');
    svgimg.setAttributeNS(null,'width',width);
    svgimg.setAttributeNS(null,'height',height);
    svgimg.setAttributeNS('http://www.w3.org/1999/xlink','href', img);
    svgimg.setAttributeNS(null, 'visibility', 'visible');
    
    return svgimg
            
}

window.imgDownload = function imgDownload()
{
    toggleBySource('country_label');
    toggleBySource('place_label');
    toggleBySource('road_label');

    var img = map.getCanvas().toDataURL();

    var link=document.createElement("a");
    link.href=img;
    link.download = 'map.png';
    link.click();
}


function makeUK()
{

    var svg = d3.select("#svg")

    d3.json("../assets/uk.json", function(error, uk) {
      if (error) return console.error(error);

      svg.append("path")
          .datum(topojson.feature(uk, uk.objects.subunits))
          .attr("d", path);
    });
}


window.getgeoInfo = function getgeoInfo()
{

    var layers2toggle = ['country_label', 'place_label'];
    var layerPromises = layers2toggle.map(function(layer){toggleBySource(layer);});

    Promise.all(layerPromises)
    .then(toggleById('road-label'))
    .then(() => {
        setTimeout(function(){
            var svgImg =  document.getElementById("svgImg");
            var img = map.getCanvas().toDataURL();

            svgImg.setAttributeNS('http://www.w3.org/1999/xlink','href', img);
            svgImg.setAttributeNS(null, 'visibility', 'visible');

        }, 500);
    })
    .then(() => {
        document.getElementById("backMap").disabled = false;

        var features = map.queryRenderedFeatures([[0,0], [width, height]]);
        var json = JSON.stringify(features, null, 2);
        var text = JSON.parse(json);

        var svgImg =  document.getElementById("svgImg")

        var svgContainer = document.getElementById('svg');

        var svg = d3.select("#svg")
        var lineString = {type: "FeatureCollection", geometries: []};

        console.log(text)

        makeUK()

        text.map(function(geo,i)
            {
                console.log(geo.geometry.type, "\r", geo.layer.source, "\r", geo)
                

                if(geo.geometry.type == 'LineString')
                {
                    lineString.features.push({"type": geo.geometry.type, "id": i, "arcs": {"type": geo.geometry.type, "coordinates": [geo.geometry.coordinates]}})
                }

                



               /*var svg = d3.select(svgContainer)
                .data(topojson.feature(geo.geometry).coordinates)
                .enter()
                .append("path")
                .attr("d", function(d){console.log(d);return d});
                */
                
                  
            })

/*
        d3.json("../assets/madrid.geojson", function(error, json) {
console.log(json)
          svg.append("path")
              .attr("class", "states")
              .datum(topojson.feature(json, json.features.coordinates))
              .attr("d", path);
        })
*/


        
    })

    



    //document.getElementById("geoInfo").style.visibility = "hidden";

    /*document.getElementById("labels").style.pointerEvents = "auto";

   var ids = [];


   var img = map.getCanvas().toDataURL();

    var svgImg =  document.getElementById("svgImg");*/

    /*svgImg['href'] = img*/

    //console.log(svgImg['xlink:href']);
   /* svgImg.setAttributeNS('http://www.w3.org/1999/xlink','href', img);
   	svgImg.setAttributeNS(null, 'visibility', 'visible');*/
   

    //document.getElementById("svg").appendChild(svgimg)

    /* text.forEach(function(e)
    {
        var id;
        var coordinates;

        switch(e.geometry.type)
        {
            case "LineString":
                id = e.properties.name_en;
                coordinates = e.geometry.coordinates[0];
                break
            case "MultiLineString":
                id = e.properties.name_en;
                coordinates = e.geometry.coordinates[0][0];
                break
            case "Point":
            {
                id = e.properties.name_en;
                coordinates = e.geometry.coordinates;
                break
            }
        }

        if(ids.indexOf(id) == -1)
        {
            ids.push(id);

            var x = map.project(coordinates).x;
            var y = map.project(coordinates).y;      
            
            var pointName = e.properties.name_en;
            var g = document.createElementNS(svgNS, 'g');

            var label = document.createElementNS(svgNS, 'text');
            label.setAttributeNS(null,"x",x);     
            label.setAttributeNS(null,"y",y - 5);
            label.setAttributeNS(null,'class','edit ' + e.layer.id);
            g.appendChild(label);

            if(e.layer.id == 'place-town' || e.layer.id == 'place-village')
            {
                var point = document.createElementNS("http://www.w3.org/2000/svg",'circle');
                point.setAttributeNS(null,'class','point')
                point.setAttributeNS(null,"cx",x);     
                point.setAttributeNS(null,"cy",y);
                point.setAttributeNS(null,"r",2.5);
                //point.setAttributeNS(null,"fill","#808080");
                g.appendChild(point);
            }
            var textNode = document.createTextNode(pointName);
            label.appendChild(textNode);

            label.addEventListener("click", function(e)
                {
                    svg.removeChild(e.target.parentNode);
                    var closeButton = document.getElementsByClassName('closeButton')[0]; 
                    closeButton.style.visibility = "hidden";
                });
            label.addEventListener("mouseover", function(e)
                {
                    var closeButton = document.getElementsByClassName('closeButton')[0];
                    closeButton.style.marginTop = y -30 + "px";
                    closeButton.style.marginLeft = x -10  + "px";
                    closeButton.style.visibility = "visible";
                })
            label.addEventListener("mouseout", function(e)
            {
                var closeButton = document.getElementsByClassName('closeButton')[0];
                closeButton.style.visibility = "hidden";
            })

            
            svg.appendChild(g);
        }
                    
    });

    document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.visibility = "hidden";
    document.getElementsByClassName("blank")[0].style.visibility = "hidden";

    var kms = document.getElementsByClassName("mapboxgl-ctrl mapboxgl-ctrl-scale")[0];
    var miles = document.getElementsByClassName("mapboxgl-ctrl mapboxgl-ctrl-scale")[1];


    var blank = document.createElementNS(svgNS, 'rect');
    blank.setAttributeNS(null,'class',"blankSvg")
    blank.setAttributeNS(null,"x",0);
    blank.setAttributeNS(null,"y",426);
    blank.setAttributeNS(null,"width",620);
    blank.setAttributeNS(null,"height",height - 426);
    

    var line0 = document.createElementNS(svgNS, 'line');
    line0.setAttributeNS(null,'class',"scaleCenterLine")
    line0.setAttributeNS(null,'id',"kms")
    line0.setAttributeNS(null,"x1",0);
    line0.setAttributeNS(null,"x2",kms.style.width);
    line0.setAttributeNS(null,"y1",447);
    line0.setAttributeNS(null,"y2",447);

    var line1 = document.createElementNS(svgNS, 'line');
    line1.setAttributeNS(null,'class',"scaleCenterLine")
    line1.setAttributeNS(null,'id',"kms")
    line1.setAttributeNS(null,"x1",0);
    line1.setAttributeNS(null,"x2",miles.style.width);
    line1.setAttributeNS(null,"y1",447);
    line1.setAttributeNS(null,"y2",447);

    var posXkm = +kms.style.width.split("px")[0] - 0.5;
    var posXmiles = +miles.style.width.split("px")[0] - 0.5;

    var line2 = document.createElementNS(svgNS, 'line');
    line2.setAttributeNS(null,'class',"scaleVerticalLine")
    line2.setAttributeNS(null,"x1",posXkm);
    line2.setAttributeNS(null,"x2",posXkm);
    line2.setAttributeNS(null,"y1",447);
    line2.setAttributeNS(null,"y2",440);

    var line3 = document.createElementNS(svgNS, 'line');
    line3.setAttributeNS(null,'class',"scaleVerticalLine")
    line3.setAttributeNS(null,"x1",posXmiles);
    line3.setAttributeNS(null,"x2",posXmiles);
    line3.setAttributeNS(null,"y1",447);
    line3.setAttributeNS(null,"y2",454);

    var textNode = document.createTextNode(kms.innerHTML);
    var kmsLabel = document.createElementNS(svgNS, 'text');
    kmsLabel.appendChild(textNode)
    kmsLabel.setAttributeNS(null,"x",0);     
    kmsLabel.setAttributeNS(null,"y",440);
    kmsLabel.setAttributeNS(null,'class','svgScaleText');
   

    var textNode = document.createTextNode(miles.innerHTML);
    var milesLabel = document.createElementNS(svgNS, 'text');
    milesLabel.appendChild(textNode)
    milesLabel.setAttributeNS(null,"x",0);     
    milesLabel.setAttributeNS(null,"y",465);
    milesLabel.setAttributeNS(null,'class','svgScaleText');
    svg.appendChild(milesLabel);

    svg.appendChild(blank);
    svg.appendChild(line0);
    svg.appendChild(line1);
    svg.appendChild(line2);
    svg.appendChild(line3);
    svg.appendChild(kmsLabel);
    svg.appendChild(milesLabel);


    var markers = document.getElementsByClassName("mapboxgl-marker");

    for (k in markers)
    {
        if(!isNaN(k))
        {
            var x = markers[k].style.transform.split('translate')[2].split(",")[0].split('(')[1].split('px')[0];
            var y = markers[k].style.transform.split('translate')[2].split(",")[1].split('px')[0];

            console.log(markers[k].style)
        }


        var point = document.createElementNS("http://www.w3.org/2000/svg",'circle');
        point.setAttributeNS(null,'class','marker')
        point.setAttributeNS(null,"cx",x);     
        point.setAttributeNS(null,"cy",y);
        point.setAttributeNS(null,"r",2.5);
        //point.setAttributeNS(null,"fill","#808080");
        svg.appendChild(point);
    }*/

}


function onlyUnique(value, index, self)
{ 
    return self.indexOf(value) === index;
}

function removeLabels()
{
    var labels = document.getElementById('labels');
    labels.innerHTML = "";
    document.getElementById("labels").style.pointerEvents = "none";
    document.getElementById("geoInfo").style.visibility = "visible";
    document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.visibility = "visible";
    document.getElementsByClassName("blank")[0].style.visibility = "visible";
    document.getElementById("backMap").disabled = true;
}
