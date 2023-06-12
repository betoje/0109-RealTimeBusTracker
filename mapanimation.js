mapboxgl.accessToken = 'pk.eyJ1IjoiYmV0b2plIiwiYSI6ImNsaXFwbmNlcDB6emwzZW1qajVpc3JiM3oifQ.uO4I_3dU24sE08YXaHM2tg';

const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12',
    center:  [-74.001, 40.7325],
    zoom: 12.5
});

// counter here represents the index of the current bus stop
let counter = 0;

function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops

  setTimeout(() => {
    if (counter >= geojson.features.length) return;

    let marker = geojson.features[counter]; 
    const el = document.createElement('div');
    const width = marker.properties.iconSize[0];
    const height = marker.properties.iconSize[1];

    el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
    el.className = `marker`;
    el.id = `div-${counter}`
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';
    // el.addEventListener('click', () => {
    //     window.alert(marker.properties.message);
    // });
    // Add markers to the map.
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(`<h3>${marker.properties.message}</h3>`)
        )
        .addTo(map);

    if (counter > 1 ) {
        elPrevious = document.getElementById(`div-${counter-1}`);
        elPrevious.style.borderStyle = 'solid';
        elPrevious.style.borderColor = 'grey';
        elPrevious.style.backgroundImage = 'none';
    }
    
    counter++;
    move();
  }, 2000);
}

// move();
