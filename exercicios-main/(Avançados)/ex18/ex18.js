// Yasmin Siqueira Lobo
function initMap() {
    // Localização inicial 
    const location = { lat: -23.55052, lng: -46.633308 };

    // Cria um novo mapa centrado na localização especificada
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#a0e0a0" } 
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#ffffff" } 
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#b0d4e3" } 
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#e5e5e5" } 
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#a0e0a0" } 
                ]
            }
        ]
    });

    // Adiciona um marcador na localização especificada
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}
