// age = confirm('Você tem mais de 18 anos?');
// if(age==false){
//     location.href='https://www.minecraft.net/pt-br/'
// }

const platform = new H.service.Platform({
  'app_id': '0EeS3RWEaZacTmZVSe3r',
  'apikey': 'QBYz8rewc1RPYVM7jvaL9tGrICvd2vWFS-WVf_rvftI'
  // 'apikey': 'b5q6ZKMFzd0A7Hmp-SWct71ZroHRsXLLl4r5WvJuhVg'

});

// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
const map = new H.Map(
  document.querySelector('.map-container'),
  defaultLayers.vector.normal.map, 
  {zoom: 16, center: {lat: -23.558822, lng: -46.662936 } })

// Add map events functionality to the map
const mapEvents = new H.mapevents.MapEvents(map);
// Add behavior to the map: panning, zooming, dragging.
const behavior = new H.mapevents.Behavior(mapEvents);

const ui = H.ui.UI.createDefault(map, defaultLayers);

let icon = new H.map.Icon("images/beers.png");

// // Create a marker using the previously instantiated icon:
let barBelaSantos = new H.map.Marker({lat: -23.556972, lng: -46.662528}, {icon: icon});
barBelaSantos.setData("Bar Bela Santos")
barBelaSantos.addEventListener('tap', (event) => {
   console.log(event.target);
  const bubble = new H.ui.InfoBubble(
    event.target.b, {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);

let oMalleys = new H.map.Marker({lat: -23.557958, lng: -46.665997}, {icon: icon});
oMalleys.setData("O'malley's")
oMalleys.addEventListener('tap', (event) => {
  // console.log(event.target.b);
  const bubble = new H.ui.InfoBubble(
    event.target.b, {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);

let bellaJau = new H.map.Marker({lat: -23.556733, lng: -46.665414}, {icon: icon});
bellaJau.setData("Bella Jau")
bellaJau.addEventListener('tap', (event) => {
   console.log(event.target);
  const bubble = new H.ui.InfoBubble(
    event.target.b, {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);

let meGusta = new H.map.Marker({lat: -23.559183,lng: -46.664836}, {icon: icon});
meGusta.setData("Me Gusta")
meGusta.addEventListener('tap', (event) => {
  // console.log(event.target.b);
  const bubble = new H.ui.InfoBubble(
    event.target.b, {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);

let orangePoint = new H.map.Marker({lat: -23.556447, lng: -46.663897}, {icon: icon});
orangePoint.setData("Orange Point")
orangePoint.addEventListener('tap', (event) => {
  // console.log(event.target.b);
  const bubble = new H.ui.InfoBubble(
    event.target.b, {
      content: event.target.getData()
    }
  );
  ui.addBubble(bubble);
}, false);

map.addObjects([barBelaSantos, oMalleys, bellaJau, meGusta, orangePoint]);

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

const mudarprologin = () => {
  location.hash = 'login';
}

const mudarprocadastro = () => {
  location.hash = 'register';
}