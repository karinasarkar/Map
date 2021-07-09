mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyaW5hc3JrciIsImEiOiJja3F3aTJ2ZnAwbHJpMnVxaG9udW5uNXAzIn0.58Qi0IJcbqcsy9BGXXCD0A';
   
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy:true})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation(){
    setupMap([88.3639,22.5726])
}
function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom:15
      });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken : mapboxgl.accessToken
    })
    map.addControl(directions,'top-left')

}
