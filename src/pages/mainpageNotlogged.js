import Button from '../components/button.js'


function confirmacaoIdade(){
	let age = confirm("VOCÊ TEM MAIS DE 18 ANOS?");
	if(age ===true){
		console.log("muito bem")
	}else{
		console.log("Vá jogar LOL")
	}
}
confirmacaoIdade()
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
      zoom: 16,
      center: { lat: -23.557562, lng: -46.659315}
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
	var barBelaSantos = new H.map.Marker({ lat: -23.556972, lng: -46.662528}, { icon: icon });
	var oMalleys = new H.map.Marker({ lat: -23.557958, lng: -46.665997}, { icon: icon });
	var bellaJau = new H.map.Marker({ lat: -23.556733,  lng: -46.665414}, { icon: icon });
  var meGusta = new H.map.Marker({ lat: -23.559183,  lng: -46.664836}, { icon: icon });
  var orangePoint = new H.map.Marker({ lat: -23.556447,  lng:  -46.663897}, { icon: icon });  
    // Add the marker to the map:
	map.addObject(barBelaSantos);
	map.addObject(oMalleys);
  map.addObject(bellaJau);
  map.addObject(meGusta);
  map.addObject(orangePoint);
	
	const homePage = () => {

const db = firebase.firestore();

db.collection('bars').get().then((snap) => {
	snap.forEach((doc) => {
		console.log(`${doc.id} => ${doc.data()}`)
	})
})

const mudarprologin = () => {
	location.hash = 'login';
}

const mudarprocadastro = () => {
	location.hash = 'register';
}

const homePage = () => {

	window.location.hash = '';
	const template = `
	<h1>Página inicial sem estar logado</h1>
	${Button({
		title:'ir pro login',
		onclick: mudarprologin
	})}
	${Button({
		title:'ir pro cadastro',
		onclick: mudarprocadastro
	})}`;
	return template;
}

export default homePage;