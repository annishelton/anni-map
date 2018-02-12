var map = L.map('anni-map').setView([40.673804, -73.999081], 11);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(map);

var beerData = [
  {
    name: 'Other Half',
    known_for: 'Double IPAs',
    lat: 40.673804,
    lon: -73.999081,
    type: 'Brewery',
  },
  {
    name: 'Greenpoint',
    known_for: 'German Style',
    lat: 40.725056,
    lon: -73.957254,
    type: 'Brewery',
  },
  {
    name: 'Single Cut',
    known_for: 'Clean ales',
    lat: 40.778192,
    lon: -73.901496,
    type: 'Brewery',
  },
  {
    name: 'Coney Island',
    known_for: 'Beachside, Weird',
    lat: 40.574953,
    lon: -73.983821,
    type: 'Brewery',
  },
  {
    name: "Three's",
    known_for: 'Good Variety',
    lat: 40.679629,
    lon: -73.982246,
    type: 'Brewery',
  },
  {
    name: 'KCBC',
    known_for: 'New ish',
    lat: 40.706002,
    lon: -73.923591,
    type: 'Brewery',
  },
  {
    name: 'Five Boroughs',
    known_for: 'Near My House',
    lat: 40.650511,
    lon: -74.014479,
    type: 'Brewery',
  },
  {
    name: "Top Hops",
    known_for: 'Buy by the Bottle',
    lat: 40.71841,
    lon: -73.989931,
    type: 'Taproom',
  },
  {
    name: "Fool's Gold",
    known_for: 'Huge Selection',
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
    known_for: 'Huge Selection',
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

  if (beerObject.type === 'Brewery') beerColor = 'green';
  if (beerObject.type === 'Taproom') beerColor = 'blue';

  var options = {
    radius: 6,
    opacity: 1,
    fillColor: beerColor,
    fillOpacity: 0.9,
    color: '#FFF',
    weight: 2,
  };

  var marker = L.circleMarker(latLon, options)
      .bindPopup(beerObject.name, {offset: [0, -6]})
      .addTo(map)
  // add the marker to the markersArray
  markersArray.push(marker);
});
