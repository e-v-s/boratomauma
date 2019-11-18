// app id 0EeS3RWEaZacTmZVSe3r
//app key QBYz8rewc1RPYVM7jvaL9tGrICvd2vWFS-WVf_rvftI

var platform = new H.service.Platform({
    'apikey': 'TUFXVbXe71qf8129SZgY3TmDXwaxwqH0yY2sth0haGA'
  });
  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();
  
  // Instantiate (and display) a map object:
  var map = new H.Map(
    document.getElementById('mapa'),
    defaultLayers.vector.normal.map,
    {
      zoom: 15,
      center: { lat: 52.5, lng: 13.4 }
    });


    // Create the parameters for the geocoding request:
var geocodingParams = {
    searchText: 'Alameda Santos, 2356, São Paulo, Brazil'
  };

// Define a callback function to process the geocoding response:
var onResult = function(result) {
  var locations = result.Response.View[0].Result,
    position,
    marker;
  // Add a marker for each location found
  for (i = 0;  i < locations.length; i++) {
  position = {
    lat: locations[i].Location.DisplayPosition.Latitude,
    lng: locations[i].Location.DisplayPosition.Longitude
  };
  map.setCenter(position)
  marker = new H.map.Marker(position);
  map.addObject(marker);
  }
};

// Get an instance of the geocoding service:
var geocoder = platform.getGeocodingService();

// Call the geocode method with the geocoding parameters,
// the callback and an error callback function (called if a
// communication error occurs):
geocoder.geocode(geocodingParams, onResult, function(e) {
  alert(e);
});

// Create a map:
// var map = new H.Map(...);

    // Create a marker icon from an image URL:
    var icon = new H.map.Icon('img/beers.png');


    // Create a marker using the previously instantiated icon:
    var marker = new H.map.Marker({ lat: -23.557562, lng: -46.659315 }, { icon: icon });
    
    // Add the marker to the map:
    map.addObject(marker);