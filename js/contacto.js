/*let map;
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

function toggleMenu() {
    const nav = document.querySelector('.header__nav');
    nav.classList.toggle('active');
}*/






function initMap() {
    // Definir la ubicación del negocio
    const businessLocation = { lat: 40.748817, lng: -73.985428 }; // Cambiar a la ubicación de tu negocio

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: businessLocation
    });

    // Añadir marcador para la ubicación del negocio
    new google.maps.Marker({
        position: businessLocation,
        map: map,
        title: "ZERO"
    });

    // Configurar el servicio de direcciones
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Función para calcular y mostrar la ruta
    function calculateAndDisplayRoute() {
        const clientLocation = { lat: 40.730610, lng: -73.935242 }; // Cambiar a la ubicación del cliente

        directionsService.route({
            origin: clientLocation,
            destination: businessLocation,
            travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("No se pudo calcular la ruta: " + status);
            }
        });
    }

    // Llamar a la función para calcular la ruta
    calculateAndDisplayRoute();
}

/*function initMap() {
    // Coordenadas de la ubicación de tu negocio
    const businessLocation = { lat: 40.712776, lng: -74.005974 }; // Cambia a las coordenadas de tu negocio

    // Inicializar el mapa centrado en la ubicación de tu negocio
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: businessLocation,
    });

    // Añadir un marcador para la ubicación de tu negocio
    const marker = new google.maps.Marker({
        position: businessLocation,
        map: map,
        title: "Tu Negocio",
    });

    // Inicializar el servicio de direcciones
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Función para calcular la ruta
    window.calculateRoute = function() {
        const startLocation = document.getElementById("start").value;

        if (startLocation) {
            const request = {
                origin: startLocation,
                destination: businessLocation,
                travelMode: 'DRIVING'
            };

            directionsService.route(request, function(result, status) {
                if (status === 'OK') {
                    directionsRenderer.setDirections(result);
                } else {
                    alert("No se pudo calcular la ruta: " + status);
                }
            });
        } else {
            alert("Por favor, introduce tu ubicación.");
        }
    };
}*/
 