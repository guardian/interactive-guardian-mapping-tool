import * as d3B from 'd3/index'
import * as d3Select from 'd3-selection'
import * as d3Queue from 'd3-queue'
import * as topojson from 'topojson'
import * as d3geo from 'd3-geo'
import * as d3gp from 'd3-geo-projection'

var d3 = Object.assign({}, d3B, d3Select, d3Queue, d3geo);

var locatorSvg = d3.select('#locator-svg');
var locatorWidth = 120,
    locatorHeight = 120;
var locatorPath = d3.geoPath();
var projection = d3.geoMercator();
var geojson;

d3.json("../assets/world.json", function(error, world) {
  if (error) return console.error(error);
  geojson = topojson.feature(world, world.objects.ne_10m_admin_0_map_subunits);
});

function makeLocator()
{
  var country = geojson.features.find((country) => d3.geoContains(country, [map.getCenter().lng,map.getCenter().lat]));

  locatorPath.projection(d3.geoMercator().fitSize([locatorWidth, locatorHeight], country));

  locatorSvg.selectAll('path').remove()

  locatorSvg.append("path")
  .datum(country)
  .attr("d", locatorPath);
}