function mapHere(){
  const platform = new H.service.Platform({
      'apikey': 'b5q6ZKMFzd0A7Hmp-SWct71ZroHRsXLLl4r5WvJuhVg'
    });
    // Obtain the default map types from the platform object:
  const defaultLayers = platform.createDefaultLayers();
  // Instantiate (and display) a map object:
  let map = new H.Map(
    document.querySelector('.map-container'),
    defaultLayers.vector.normal.map,
    {zoom: 14, center: {lat: -23.558822, lng: -46.662936 } })
  const mapEvents = new H.mapevents.MapEvents(map);
  const behavior = new H.mapevents.Behavior(mapEvents);
  const ui = H.ui.UI.createDefault(map, defaultLayers);
  const icon = new H.map.Icon('images/beers.png');
  // // Create a marker using the previously instantiated icon:
  let barBelaSantos = new H.map.Marker({lat: -23.556972, lng: -46.662528}, {icon: icon});
  barBelaSantos.setData('Bar Bela Santos')
  barBelaSantos.addEventListener('tap', (event) => {
    // console.log(event.target.b);
    const bubble = new H.ui.InfoBubble(
      event.target.b, {
        content: event.target.getData()
      }
    );
    ui.addBubble(bubble);
  }, false);
  let oMalleys = new H.map.Marker({lat: -23.557958, lng: -46.665997}, {icon: icon});
  oMalleys.setData('Omalleys')
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
  bellaJau.setData('Bella Jau')
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
  meGusta.setData('Me Gusta')
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
  orangePoint.setData('Orange Point')
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
const filterRegion = document.getElementById("filter-region");
  filterRegion.addEventListener('change', (filterRegion) => {
    filter(filterRegion.target.value)
  })
  
  function filter(condition) {
    if (condition === 'center') {
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
    } else if (condition === 'oeste') {
      document.querySelector('.map-container').innerHTML = '';
      map = new H.Map(
        document.querySelector('.map-container'),
        defaultLayers.vector.normal.map,
        {
          zoom: 13.5,
          center: { lat: -23.5719237, lng: -46.7096092}
        }
      );
    } else if (condition === 'leste') {
      document.querySelector('.map-container').innerHTML = '';
      map = new H.Map(
        document.querySelector('.map-container'),
        defaultLayers.vector.normal.map,
        {
          zoom: 13.5,
          center: { lat: -23.5340031, lng: -46.5804982}
        }
      );
    } else if (condition === 'norte') {
      document.querySelector('.map-container').innerHTML = '';
      map = new H.Map(
        document.querySelector('.map-container'),
        defaultLayers.vector.normal.map,
        {
          zoom: 13.5,
          center: { lat: -23.4802577, lng: -46.6796092}
        }
      );
    } else if (condition === 'sul') {
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
}
window.mapHere = mapHere;