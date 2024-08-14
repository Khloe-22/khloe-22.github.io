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
        content: "<strong>Mi Empresa</strong>"
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







// Newsletter
/*document.addEventListener("DOMContentLoaded", function() {
    const newsletterPopup = document.getElementById("newsletterPopup");
    const closePopupButton = document.getElementById("closePopup");
    const newsletterForm = document.getElementById("newsletterForm");
    const formMessage = document.getElementById("formMessage");

    // Mostrar el popup automáticamente después de 3 segundos
    setTimeout(function() {
        newsletterPopup.classList.add("show");
    }, 3000);

    // Ocultar el popup al hacer clic en el botón de cierre
    closePopupButton.addEventListener("click", function() {
        newsletterPopup.classList.remove("show");
    });

    // Ocultar el popup después de enviar el formulario
    newsletterForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío real del formulario

        newsletterForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita el envío real del formulario
        
            const xhr = new XMLHttpRequest();
            const formData = new FormData(newsletterForm);
        
            xhr.open("POST", newsletterForm.action, true);
            xhr.setRequestHeader("Accept", "application/json");
        
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) { // Verifica que la solicitud ha terminado
                    if (xhr.status === 200) { // Verifica que la solicitud fue exitosa
                        // Mostrar el mensaje de éxito
                        formMessage.style.display = "block";
                        formMessage.style.opacity = "1";
        
                        // Ocultar el popup después de unos segundos
                        setTimeout(function() {
                            newsletterPopup.classList.remove("show");
                            formMessage.style.display = "none";
                            formMessage.style.opacity = "0";
                            newsletterForm.reset();
                        }, 3000);
                    } else {
                        // Manejar errores si es necesario
                        alert("Hubo un problema al enviar el formulario. Inténtalo de nuevo.");
                    }
                }
            };
        
            xhr.send(formData);
        });
        
        // Mostrar el mensaje de éxito
        formMessage.style.display = "block";
        formMessage.style.opacity = "1";

        // Ocultar el popup después de unos segundos
        setTimeout(function() {
            newsletterPopup.classList.remove("show");
            formMessage.style.display = "none";
            formMessage.style.opacity = "0";
            newsletterForm.reset();
        }, 3000);
    });
});*/
