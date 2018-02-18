var defaultCenter = [40.685594, -73.878838];
var defaultZoom = 11;

var map = L.map('anni-map').setView([40.685594, -73.878838], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

var beerData = [
  {
    name: 'Other Half Brewing',
    known_for: 'Double IPAs and crazy Stouts',
    lat: 40.673804,
    lon: -73.999081,
    type: 'Brewery',
  },
  {
    name: 'Greenpoint Brewery',
    known_for: 'German style beers',
    lat: 40.725056,
    lon: -73.957254,
    type: 'Brewery',
  },
  {
    name: 'Single Cut',
    known_for: 'clean tasting beers and boardgames',
    lat: 40.778192,
    lon: -73.901496,
    type: 'Brewery',
  },
  {
    name: 'Coney Island Brewery',
    known_for: 'drinking beachside, and being weird',
    lat: 40.574953,
    lon: -73.983821,
    type: 'Brewery',
  },
  {
    name: "Three's Brewing",
    known_for: 'a good variety of food and beers',
    lat: 40.679629,
    lon: -73.982246,
    type: 'Brewery',
  },
  {
    name: 'KCBC',
    known_for: 'sight-seeing Bushwick hipsters',
    lat: 40.706002,
    lon: -73.923591,
    type: 'Brewery',
  },
  {
    name: 'Five Boroughs Brewing Co.',
    known_for: 'an adventure in Sunset Park',
    lat: 40.650511,
    lon: -74.014479,
    type: 'Brewery',
  },
  {
    name: "Top Hops Beer Shop",
    known_for: 'buying by the bottle',
    lat: 40.71841,
    lon: -73.989931,
    type: 'Taproom',
  },
  {
    name: "Fool's Gold",
    known_for: 'a huge selection of drafts',
    lat: 40.723087,
    lon: -73.989781,
    type: 'Taproom',
  },
  {
    name: "Berg'n",
    known_for: 'Food Carts!',
    lat: 40.677246,
    lon: -73.957193,
    type: 'Taproom',
  },
  {
    name: "Blind Tiger",
    known_for: 'A classic near NYU',
    lat: 40.731852,
    lon: -74.003243,
    type: 'Taproom',
  }]

// how to add a single marker using L.marker()
// var chrisPizza = pizzaData[0];
//
// L.marker([chrisPizza.lat, chrisPizza.lon]).addTo(map)
//     .bindPopup(chrisPizza.name + ' likes to eat at ' +  chrisPizza.pizzaShop);


// create an empty markers array that we can fill with markers
var markersArray = [];

// how to add a marker for each object in the array

beerData.forEach(function(beerObject) {
  var latLon = [beerObject.lat, beerObject.lon];

  var beerColor = '#FFF';

  if (beerObject.type === 'Brewery') beerColor = '#9e10a8';
  if (beerObject.type === 'Taproom') beerColor = '#3fe2d8';

  var options = {
    radius: 10,
    opacity: 1,
    fillColor: beerColor,
    fillOpacity: 0.5,
    color: beerColor,
    weight: 1,
  };

  var marker = L.circleMarker(latLon, options)
      .bindPopup(beerObject.name, {offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});

$('.fly-to-other-half').click(function(e) {
  map.setView([beerData[0].lat,beerData[0].lon],14);
  var otherHalf = markersArray[0];
  otherHalf.openPopup();
  e.stopPropagation();
});
$('.fly-to-greenpoint').click(function(e) {
  map.setView([beerData[1].lat,beerData[1].lon],14);
  var greenpoint = markersArray[1];
  greenpoint.openPopup();
  e.stopPropagation();
});
$('.fly-to-single-cut').click(function(e) {
  map.setView([beerData[2].lat,beerData[2].lon],14);
  var singleCut = markersArray[2];
  singleCut.openPopup();
  e.stopPropagation();
});
$('.fly-to-coney-island').click(function(e) {
  map.setView([beerData[3].lat,beerData[3].lon],14);
  var coneyIsland = markersArray[3];
  coneyIsland.openPopup();
  e.stopPropagation();
});
$('.fly-to-threes').click(function(e) {
  map.setView([beerData[4].lat,beerData[4].lon],14);
  var threes = markersArray[4];
  threes.openPopup();
  e.stopPropagation();
});
$('.fly-to-kcbc').click(function(e) {
  map.setView([beerData[5].lat,beerData[5].lon],14);
  var kcbc = markersArray[5];
  kcbc.openPopup();
  e.stopPropagation();
});
$('.fly-to-five-boroughs').click(function(e) {
  map.setView([beerData[6].lat,beerData[6].lon],14);
  var fiveBoroughs = markersArray[6];
  fiveBoroughs.openPopup();
  e.stopPropagation();
});

$('.reset').click(function() {
  map.flyTo(defaultCenter, defaultZoom)
});
