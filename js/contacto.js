let map;
let directionsService;
let directionsRenderer;

function initMap() {
    // Inicialización del mapa centrado en la ubicación de la empresa
    const empresa = { lat: 52.3074455, lng: 4.937064}; // Coordenadas de la empresa
    map = new google.maps.Map(document.getElementById("map"), {
        center: empresa,
        zoom: 14
    });

    // Inicializar los servicios de direcciones y el renderizador
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map
    });

    // Añadir un marcador en la ubicación de la empresa
    const marker = new google.maps.Marker({
        position: empresa,
        map: map,
        title: "ZERO"
    });

    // InfoWindow para el marcador de la empresa
    const infowindow = new google.maps.InfoWindow({
        content: "<strong>Zero</strong>"
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}

function calculateRoute() {
    const start = document.getElementById("start").value;
    const end = { lat: 52.3074455, lng: 4.937064 }; // Coordenadas de la empresa

    if (!start) {
        alert("Por favor, introduce una ubicación válida.");
        return;
    }

    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING, // Cambiar a TRANSIT si deseas transporte público
    };

    directionsService.route(request, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);

            const route = result.routes[0];
            const duration = route.legs[0].duration.text;
            alert("El tiempo estimado es: " + duration);
        } else {
            alert("No se pudo calcular la ruta: " + status);
        }
    });
}

// Inicializar el mapa cuando se cargue la ventana
window.onload = initMap;


document.getElementById('toggle-footer').addEventListener('click', function() {
    const footerPopup = document.getElementById('footer-popup');
    footerPopup.classList.toggle('active');
});






    