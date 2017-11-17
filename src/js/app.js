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
var zoom = 3;
var center;
var pitch;
var bearing;
var mapboxStyle = "mapbox://styles/guardian/cj849befy0k092qmnn3p6onkx";
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg';
var dpi = 120;
var scaleWidht = 120;

//http://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7/14/4823/6160.mvt?access_token=<your access token>
//https://api.mapbox.com/styles/v1/guardian/cj849befy0k092qmnn3p6onkx.mvt?fresh=true&title=true&access_token=pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg#17.0/51.521175/-0.078854/0

var featureElement;
var transform = d3geo.geoTransform({point: projectPoint});
var path = d3.geoPath().projection(transform);

function projectPoint(lon, lat) {
    var point = map.project(new mapboxgl.LngLat(lon, lat));
    this.stream.point(point.x, point.y);
}

Object.defineProperty(window, 'devicePixelRatio', {
    get: function() {return dpi / 96}
});

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: mapboxStyle, // stylesheet location
    center: [lng,lat], // starting position [lng, lat]
    zoom: zoom,
    preserveDrawingBuffer: true
});

map.on('load', function () {

    map.addLayer(styleLayers[0])

    styleLayers.forEach(function(feature){

        var layerID = feature['id'];
        if (!map.getLayer(layerID))
        {
            map.addLayer(feature)
        }
        
    })
})

var blank = document.createElement("div");
blank.className = "blank";

var controlContainer = document.getElementsByClassName("mapboxgl-map")[0];
controlContainer.appendChild(blank)

var miles = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: scaleWidht,
    unit: 'imperial'
}));

var km = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: scaleWidht,
    unit: 'metric'
}));

map.on('zoom', update)
map.on("moveend", update)
map.on("mouseup", function(){})
map.on('mousedown', function(event){document.getElementById("svg").style.visibility='hidden';})
map.on('zoomstart', function(event){document.getElementById("svg").style.visibility='hidden';})

function update()
{
    center = map.getCenter();
    zoom = map.getZoom();
    pitch = map.getPitch();
    bearing = map.getBearing();
    lat = center.lat;
    lng = center.lng;

    document.getElementById("svg").style.visibility = 'visible';

    if(featureElement != undefined)
    {
        featureElement.attr("d", path); 
    }
}

window.onresize = function onResize(){}

window.makeUK = function makeUK()
{
    var svg = d3.select("#svg")

    d3.json("../assets/uk.json", function(error, uk) {
      if (error) return console.error(error);

      console.log(topojson.feature(uk, uk.objects.subunits))

      featureElement = svg.append("path")
          .datum(topojson.feature(uk, uk.objects.subunits))
          .attr("d", path);
    });
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
    var img = map.getCanvas().toDataURL();

    var link=document.createElement("a");
    link.href=img;
    link.download = 'map.png';
    link.click();
}


window.getgeoInfo = function getgeoInfo()
{

    var layers2toggle = ['country-label-sm',"country-label-md", "country-label-lg", "place-village", "place-town", "place-island", "place-city-sm", "place-city-md-s", "place-city-md-n", "place-city-lg-s", "place-city-lg-n"];
    var layerPromises = layers2toggle.map(function(layer){toggleById(layer);});

    Promise.all(layerPromises)
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
        var json = JSON.stringify(features, null, 1);
        var text = JSON.parse(json);
        var lineString = {type: "FeatureCollection", geometries: []};

        var map_raw = {
        "type": "FeatureCollection",
        "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },
        "features": [
        ]
        }


            text.map(function(d){
                map_raw.features.push(d)
            })
            
            var svg = d3.select('#svg');

            svg.selectAll("path")
            .data(map_raw.features)
            .enter()
            .append('path')
            .attr("d", path);



    })

}
