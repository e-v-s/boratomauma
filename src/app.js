// age = confirm('Você tem mais de 18 anos?');
// if(age==false){
//     location.href='https://www.minecraft.net/pt-br/'
// }

const platform = new H.service.Platform({
    'apikey': 'b5q6ZKMFzd0A7Hmp-SWct71ZroHRsXLLl4r5WvJuhVg'
  });

  // Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
const map = new H.Map(
  document.querySelector('.map-container'),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });
