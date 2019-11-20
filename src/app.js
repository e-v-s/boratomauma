const platform = new H.service.Platform({
    'apikey': 'b5q6ZKMFzd0A7Hmp-SWct71ZroHRsXLLl4r5WvJuhVg'
  });

const defaultLayers = platform.createDefaultLayers();

const map = new H.Map(
  document.querySelector('.map-container'),
  defaultLayers.vector.normal.map,
  {
    zoom: 10,
    center: { lat: 52.5, lng: 13.4 }
  });

function filter(condition) {
  if (condition === "center") {
    document.querySelector('.map-container').innerHTML = '';
    map = new H.Map(
      document.querySelector('.map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13.5,
        center: { lat: -23.5428164, lng: -46.6416874}
      }
    )
    ;
  } else if (condition === "oeste") {
    document.querySelector('.map-container').innerHTML = '';
    map = new H.Map(
      document.querySelector('.map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13.5,
        center: { lat: -23.5719237, lng: -46.7096092}
      }
    );
  } else if (condition === "leste") {
    document.querySelector('.map-container').innerHTML = '';
    map = new H.Map(
      document.querySelector('.map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13.5,
        center: { lat: -23.5340031, lng: -46.5804982}
      }
    );
  } else if (condition === "norte") {
    document.querySelector('.map-container').innerHTML = '';
    map = new H.Map(
      document.querySelector('.map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13.5,
        center: { lat: -23.4802577, lng: -46.6796092}
      }
    );
  } else if (condition === "sul") {
    document.querySelector('.map-container').innerHTML = '';
    map = new H.Map(
      document.querySelector('.map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13.5,
        center: { lat: -23.6528888, lng: -46.6486313}
      }
    );
  } 
}
