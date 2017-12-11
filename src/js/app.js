import * as d3B from 'd3/index'
import * as d3Select from 'd3-selection'
import * as d3Queue from 'd3-queue'
import * as topojson from 'topojson'
import * as d3geo from 'd3-geo'
import * as d3gp from 'd3-geo-projection'

var d3 = Object.assign({}, d3B, d3Select, d3Queue, d3geo);

var width = 620,
    height = 430;

var locatorWidth = 120,
    locatorHeight = 120;

var scaleWidht = 120;
var scaleHeight = 33;

var lat = 40.4378698,
    lng = -3.8196207;

var zoom = 4;
var zoomBreak = 12;
var maxZoomBreak = 22;
var center;
var pitch;
var bearing;
var mapboxStyle = "mapbox://styles/guardian/cj849befy0k092qmnn3p6onkx";
mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VhcmRpYW4iLCJhIjoiNHk1bnF4OCJ9.25tK75EuDdgq5GxQKyD6Fg';
var dpi = 120;


var transform = d3geo.geoTransform({point: projectPoint});
var path = d3.geoPath().projection(transform);

var svg = d3.select('#svg');
var mapSvg = d3.select('#map-svg');
var locatorSvg = d3.select('#locator-svg')
var scaleSvg = d3.select('#scale-svg')
var geoInfo = d3.select('#geoInfo');
var mapContainer = d3.select('#map-container');
var canvas = d3.select('.mapboxgl-canvas');
var geojson;
var gTop = new MapboxGeocoder({accessToken: mapboxgl.accessToken});
var gBottom = new MapboxGeocoder({accessToken: mapboxgl.accessToken});
var nTop = new mapboxgl.NavigationControl();
var nBottom = new mapboxgl.NavigationControl();

Object.defineProperty(window, 'devicePixelRatio', {
    get: function() {return dpi / 96}
});

d3.json("../assets/world.json", function(error, world) {
  if (error) return console.error(error);
  geojson = topojson.feature(world, world.objects.ne_10m_admin_0_map_subunits);
});

var map = new mapboxgl.Map({
    container: 'map-container', // container id
    style: mapboxStyle, // stylesheet location
    center: [lng,lat], // starting position [lng, lat]
    zoom: zoom,
    preserveDrawingBuffer: true
});

map.addControl(gTop, 'top-right');
map.addControl(nTop , 'top-right');
map.addControl(gBottom, 'bottom-right');
map.addControl(nBottom , 'bottom-right');

var miles = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: scaleWidht,
    unit: 'imperial'
}));

var km = map.addControl(new mapboxgl.ScaleControl({
    maxWidth: scaleWidht,
    unit: 'metric'
}));

map.on('moveend',function(data)
{
    var features = map.queryRenderedFeatures(map.getCenter());
    var json = JSON.stringify(features, null, 2);
    var text = JSON.parse(json);
    zoom = map.getZoom();

    resize();
});

map.on('mousemove', function (event) {});

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
        "id": "route",
        "type": "line",
        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
          [-4.4343567,56.0751014],
          [-4.3807983,56.0942576],
          [-4.3670654,56.10881],
          [-4.3725586,56.1287149],
          [-4.393158,56.1493745],
          [-4.4068909,56.1608473],
          [-4.4013977,56.1769033],
          [-4.3846028,56.1786724],
          [-4.3492126,56.2005929],
          [-4.3135071,56.2082316],
          [-4.2887878,56.2166324],
          [-4.2116631,56.245059],
          [-4.2654419,56.2509801],
          [-4.2970276,56.2685237],
          [-4.3066406,56.2868215],
          [-4.317627,56.3142518],
          [-4.2970276,56.34014],
          [-4.2832947,56.3629681],
          [-4.2750549,56.3827413],
          [-4.2901611,56.4063037],
          [-4.3080139,56.4260545],
          [-4.3162537,56.4473131],
          [-4.3162537,56.4571791],
          [-4.319211,56.469346],
          [-4.2434692,56.4685598],
          [-4.185791,56.484487],
          [-4.1239929,56.5117752],
          [-4.0965271,56.5390439],
          [-4.0649414,56.5572121],
          [-4.0209961,56.5655362],
          [-3.9743042,56.5791537],
          [-3.9303589,56.6018385],
          [-3.866969,56.621752],
          [-3.8356018,56.632819],
          [-3.8314819,56.6418817],
          [-3.8163757,56.6516972],
          [-3.7889099,56.658491],
          [-3.7545776,56.6698113],
          [-3.7339783,56.6848997],
          [-3.729711,56.704361]
                    ]
                }
            }
        },
        "layout": {
            "line-join": "round",
            "line-cap": "round"
        },
        "paint": {
            "line-color": "#005789",
            "line-width": 1.5
        }
    });

    resize()
})

function resize()
{
  svg.attr({"width":width + 'px', height:height + 'px'});
  svg.attr('viewBox', '0 0 ' + width + ' ' + height);

  locatorSvg.attr({"width":locatorWidth + 'px', height:locatorHeight + 'px'});
  locatorSvg.attr('viewBox', '0 0 ' + locatorWidth + ' ' + locatorHeight );

  scaleSvg.attr({"width":scaleWidht + 'px', height:scaleHeight + 'px'});
  scaleSvg.attr('viewBox', '0 0 ' + scaleWidht + ' ' + scaleHeight);

  mapContainer.style('width', width + 'px').style('height', height + 'px');

  geoInfo.style('width', width + 'px').style('height', height + 'px');

  makeLocator();
  makeScale();

  var selector = document.getElementById('position-selector');
  var position = selector.options[selector.selectedIndex].value;
  alignLocator(position)
}

function makeLocator()
{
  var country = geojson.features.find((country) => d3.geoContains(country, [map.getCenter().lng,map.getCenter().lat]));
  var proj = d3.geoMercator().fitSize([locatorWidth, locatorHeight], country);
  var pth = d3.geoPath().projection(proj);

  locatorSvg.selectAll('path').remove()
  locatorSvg.selectAll('rect').remove()

  locatorSvg.append("path")
  .datum(country)
  .attr("d", pth)
  .attr('stroke', '#FFFFFF')
  .attr('stroke-width', '7px')
  .attr('stroke-linejoin', 'round')
  .attr('fill', 'none');

  locatorSvg.append("path")
  .datum(country)
  .attr("d", pth)
  .attr('fill', '#929297');

  var ne = map.getBounds()._ne;
  var sw = map.getBounds()._sw;

  var topRight = proj([ne.lng,ne.lat]);
  var bottomLeft = proj([sw.lng, sw.lat])

  var rectHeight = bottomLeft[1] - topRight[1];
  var rectWidth = topRight[0] - bottomLeft[0];

  if(rectWidth && rectHeight && rectWidth > 0 && rectHeight > 0)
  {
    locatorSvg.append("rect")
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('x', bottomLeft[0])
    .attr('y', topRight[1])
    .attr('stroke', 'black')
    .attr('stroke-width', '2px')
    .attr('fill', 'none')
  }
}


function makeScale()
{
  scaleSvg.selectAll('rect').remove();
  scaleSvg.selectAll('text').remove();

  var sw = d3.select('.mapboxgl-ctrl-bottom-left').style('width').split('px')[0];
  scaleWidht = sw;
  var kmsw = d3.select('.mapboxgl-ctrl-bottom-left > div:nth-child(1)').style('width').split('px')[0] - 1;
  var kmstext = d3.select('.mapboxgl-ctrl-bottom-left > div:nth-child(1)').html()
  var milesw = d3.selectAll('.mapboxgl-ctrl-bottom-left > div:nth-child(2)').style('width').split('px')[0] - 1;
  var mileswtext = d3.select('.mapboxgl-ctrl-bottom-left > div:nth-child(2)').html()

  scaleSvg.append('text')
  .text(kmstext)
  .attr('x',0)
  .attr('y',10)
  .attr('font-family','"DS3 Display Sans", "Guardian Text Sans Web"')
  .attr('font-size','12px')
  .attr('fill','#909090')

  scaleSvg.append('rect')
  .attr('width', '1px')
  .attr("height", '5px')
  .attr("fill", 'grey')
  .attr("x", kmsw + 'px')
  .attr("y", '10px')

  scaleSvg.append('rect')
  .attr('width', sw + 'px')
  .attr("height", '2px')
  .attr("fill", 'grey')
  .attr("y", '15px')

  scaleSvg.append('rect')
  .attr('width', '1px')
  .attr("height", '5px')
  .attr("fill", 'grey')
  .attr("x", milesw + 'px')
  .attr("y", '17px')

  scaleSvg.append('text')
  .text(mileswtext)
  .attr('x', 0)
  .attr('y',30)
  .attr('font-family','"DS3 Display Sans", "Guardian Text Sans Web"')
  .attr('font-size','12px')
  .attr('fill','#909090')
  
}


function alignLocator(position)
{
  var posX, posY;

  var ctr = d3.select('.mapboxgl-ctrl-top-right');
  var cbr = d3.select('.mapboxgl-ctrl-bottom-right');
  var mc = d3.select('.meassures-container');

  var scale = d3.select('#scale-svg');

  ctr.style('visibility', 'hidden');
  cbr.style('visibility', 'hidden');

  if(position === 'bottom-right')
  {
    posX = width - locatorWidth - 5;
    posY = height - locatorHeight - 5;

    locatorSvg.attr('transform','translate(' + posX  + ' , ' + posY + ')');
    ctr.style('visibility', 'visible');
    mc.style('bottom', height - 60 + 'px');

    locatorSvg.attr('transform','translate(' + posX  + ' , ' + posY + ')');

    scale.attr('transform','translate(' + 0  + ' , ' + (height - scaleHeight) + ')');
  }
  else if(position === 'bottom-left')
  {
    posX = 5 ;
    posY = height - locatorHeight -5;

    locatorSvg.attr('transform','translate(' + posX  + ' , ' + posY + ')');
    ctr.style('visibility', 'visible');
    mc.style('bottom', height - 60 + 'px')

    scale.attr('transform','translate(' + (width - scaleWidht)  + ' , ' + (height - scaleHeight) + ')');
  }
  else if(position === 'top-right')
  {
    posX = width - locatorWidth - 5 ;
    posY = 5;

    locatorSvg.attr('transform','translate(' + posX  + ' , ' + posY + ')');
    cbr.style('visibility', 'visible');
    mc.style('bottom', 0)

    scale.attr('transform','translate(' + 0  + ' , ' + 0 + ')');
  }
  else if(position === 'top-left')
  {
    posX = 5;
    posY = 5;

    locatorSvg.attr('transform','translate(' + posX  + ' , ' + posY + ')');
    cbr.style('visibility', 'visible');
    mc.style('bottom', 0);

     scale.attr('transform','translate(' + (width - scaleWidht)  + ' , ' + 0 + ')');
  }
}

window.locatorPosition = function locatorPosition(that)
{
  alignLocator(that)
}

window.onResize = function onResize(that)
{
  var w = width,
      h = height;

  if(that.id==='width')w = that.value;
  if(that.id==='height')h = that.value;
  
  if (w.length >= 3 || h.length >= 3)
  {
    width = w;
    height = h;
    resize();
    map.resize();
  }  
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
    return new Promise(function(resolve, reject)
    {
        var features = map.queryRenderedFeatures([[0,0], [width, height]]);
        features.push()
        var json = JSON.stringify(features, null, 2);
        var text = JSON.parse(json);

        var map_raw =
        {
            "type": "FeatureCollection",
            "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::3857" } },
            "features": []
        }

        text.map(function(d)
        {
            map_raw.features.push(d)
        })

        map_raw.features.reverse();

        if(text == null)reject(console.log('Error gathering geo info'))

        Promise.resolve(makeSvg(map_raw));
    })
}




function projectPoint(lon, lat) {
    var point = map.project(new mapboxgl.LngLat(lon, lat));
    this.stream.point(point.x, point.y);
}

function pointProjection(lon, lat) {
    return map.project(new mapboxgl.LngLat(lon, lat));
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

function makeG(id)
{
     var g = mapSvg.append('g')
    .attr('id', id)
    .attr('width', width)
    .attr('height', height)

    return g
}

function makeSvg(map_raw)
{
  Promise.resolve(map_raw)
  .then(()=>
  {
    d3.select('.mapboxgl-canvas').style('visibility', 'hidden')
  })
  .then(()=>
  {
    setTimeout(()=>
    {

      var labelsIds = ["place-village","place-town","place-island","place-city-sm","place-city-md-s","place-city-md-n","place-city-lg-s","place-city-lg-n","country-label-sm","country-label-md","country-label-lg","road-label"];
      var labelsTemp = [];

      map_raw.features.map(function(d,i)
      {
        if(labelsIds.indexOf(d.layer.id) != -1)
        {
          labelsTemp.push({type:d.properties.type, name: d.properties.name_en, coordinates: d.geometry.coordinates});
        }
      });

      var labels = labelsTemp.reduce(function (p, c) {
        if (!p.some(function (el) { return el.name === c.name; })) p.push(c);
        return p;
      }, []);

      var background = makeG('background');

     background.append('rect')
     .attr('width', width)
     .attr('height', height)
     .attr('fill', ()=>
     {
      if(zoom>=zoomBreak)
      {
        return styleLayers[0].paint['background-color'].stops[2][1]
      }
      else
      {
        return styleLayers[0].paint['background-color'].stops[0][1]
      }
     })


      var hillshadeLayers = ['hillshade_shadow_faint','hillshade_shadow_med','hillshade_shadow_dark','hillshade_shadow_extreme'];


      hillshadeLayers.map(function(layer){

        var hillshadeLayer = makeG(layer);

        hillshadeLayer.selectAll('paths')
        .data(map_raw.features)
        .enter()
        .filter(function(d){return d.layer.id == layer})
        .append('path')
        .attr('class', function(d){ return d.layer.id})
        .attr("d", path)
        .attr('fill', function(d){
          return d.layer.paint['fill-color']
        });
      });

      var parks = makeG('parks');

      parks.selectAll('paths')
      .data(map_raw.features)
      .enter()
      .filter(function(d){return  d.layer.id == 'parks' || d.layer.id == 'national_park'})
      .append('path')
      .attr('class', function(d){return d.layer.id})
      .attr("d", path)
      .attr('fill', function(d){
        return d.layer.paint['fill-color']
      })
      .attr('opacity', function(d)
      {
        return d.layer.paint['fill-opacity']
      })

      var water = makeG('water');

      water.selectAll('paths')
      .data(map_raw.features)
      .enter()
      .filter(function(d){return  d.layer.id == 'water'})
      .append('path')
      .attr('class', function(d){ return d.layer.id})
      .attr("d", path)
      .style("fill", function(d)
      {
        if(zoom>=zoomBreak)
        {
          return d.layer.paint['fill-color'].stops[2][1]
        }
        else
        {
          return d.layer.paint['fill-color'].stops[0][1] 
        }
      })

      var industrial = makeG('industrial');

      industrial.selectAll('paths')
      .data(map_raw.features)
      .enter()
      .filter(function(d){return  d.layer.id == 'industrial'})
      .append('path')
      .attr('class', function(d){ return d.layer.id})
      .attr("d", path);

      var paths = makeG('paths');

      paths.selectAll("path")
      .data(map_raw.features)
      .enter()
      .filter(function(d){return d.geometry.type == "LineString" || d.geometry.type == "MultiLineString"})
      .append('path')
      .attr('class', function(d){return d.layer.id})
      .attr("d", path)
      .attr('stroke-linecap','round')
      .attr("stroke-dasharray", function(d)
      {
        if(d.layer.id == 'admin-3-4-boundaries' || d.layer.id == 'admin-2-boundaries-dispute')
        {
          return "1," + zoom
        }
      })
      .attr("stroke", function(d)
      {
        if(d.layer.id == 'rail-roads')
        {
          return d.layer.paint['line-color']
        }
        else if(d.layer.id == 'Motorways')
        {
          return d.layer.paint['line-color']
        }
        else if(d.layer.id == "streets")
        {
          return d.layer.paint['line-color']
        }
      })
      .attr("stroke-width", function(d)
      {
        if(d.layer.id == 'admin-3-4-boundaries' || d.layer.id == 'admin-2-boundaries' || d.layer.id == 'admin-2-boundaries-dispute' )
        {
          if(zoom>=zoomBreak)
          {
            var maxWidth = d.layer.paint['line-width'].stops[3][1];
            var thickness = zoom * maxWidth / zoomBreak;
            return thickness
          }
          else
          {
            var maxWidth = d.layer.paint['line-width'].stops[1][1];
            var thickness = zoom * maxWidth / zoomBreak;
            return thickness
          }
        }
      })
      .style("fill", 'none')


/*                    .rail-roads{stroke: #B3B3B4; stroke-width:1px; fill: none;}
.Motorways{stroke: ; stroke-width:1px; fill: none;}
.road{stroke: #dadada; stroke-width:1px; fill: none;}
.secondary-road{stroke: #dadada; stroke-width:1px; fill: none;}
.primary-road{stroke: #dadada; stroke-width:1px; fill: none;}
.streets{stroke: #dadada; stroke-width:1px; fill: none;}*/

      var points = makeG('points');

      /*points.selectAll("circle")
      .data(labels)
      .enter()
      .filter(function(d){return d.type != 'country'})
      .append('circle')
      .attr('class', function(d){return d.name})
      .attr("cx", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.x})
      .attr("cy", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.y})
      .attr("r", "2.5px")
      .attr("fill", "#808080");
      var l = makeG('labels');
      l.selectAll("text")
      .data(labels)
      .enter()
      .append('text')
      .attr('class', function(d){return d.type})
      .attr("x", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.x})
      .attr("y", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.y})
      .text(function(d){return d.name});
      */

      var e = document.createElement('script'); 
      if (window.location.protocol === 'https:') { 
        e.setAttribute('src', 'https://raw.github.com/NYTimes/svg-crowbar/gh-pages/svg-crowbar.js'); 
      } else { 
        e.setAttribute('src', 'http://nytimes.github.com/svg-crowbar/svg-crowbar.js'); 
      }                    
      e.setAttribute('class', 'svg-crowbar'); 
      document.body.appendChild(e);


      //var s = makeG("scale")
      /*var t = makeG('track');
      t.selectAll('path')
      .data(track)
      .enter()
      .append('path')
      .attr('class', function(d){return 'track'})
      .attr('d', path)
      .style({'stroke':'#005789', 'stroke-width':'1.5px'})*/
      /*var points = makeG('points')
      points.selectAll('circle')
      .data(cities)
      .enter()
      .append('circle')
      .attr('class', function(d){return 'travel-point'})
      .attr("cx", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.x})
      .attr("cy", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.y})
      .attr("r", "3.5px")
      .attr("fill", "#DC2A7D");
      var l = makeG('labels');
      l.selectAll("text")
      .data(cities)
      .enter()
      .append('text')
      .attr('class', function(d){console.log(d)})
      .attr("x", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.x})
      .attr("y", function (d) { var point = pointProjection(d.coordinates[0], d.coordinates[1]); return  point.y})
      .text(function(d){return d.place})
      .style({'font-family':'DS3 Display Sans', 'font-size':'15px'});*/
    },500) 
  })
  .then(()=>
  {
    setTimeout(()=>
    {
      d3.select('#map-svg').selectAll('*').remove();
      d3.select('.mapboxgl-canvas').style('visibility', 'visible');
    },1000)
    
  })

}








