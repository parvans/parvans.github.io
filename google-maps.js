function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 11.673137, lng: 75.718047};
    

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Calicut, India' // Title Location
    });
}