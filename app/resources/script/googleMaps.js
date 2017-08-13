function initMap() {
    var telAviv = {lat: 32.060569, lng: 34.770744};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: telAviv
    });
    var marker = new google.maps.Marker({
        position: telAviv,
        map: map
    });
}
initMap();