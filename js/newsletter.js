document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el popup después de un pequeño retraso
    setTimeout(() => {
        const popup = document.getElementById("newsletterPopup");
        popup.classList.add("show");
    }, 500); // Espera 500ms antes de mostrar el popup

    // Manejar el envío del formulario
    document.getElementById("newsletterForm").addEventListener("submit", function(event){
        event.preventDefault(); // Evita que el formulario se envíe inmediatamente

        // Obtener el mensaje de confirmación
        const formMessage = document.getElementById("formMessage");

        // Mostrar el mensaje y hacer un fade in
        formMessage.style.display = "block";
        formMessage.style.opacity = 1;

        // Enviar el formulario usando fetch
        fetch(this.action, {
            method: this.method,
            body: new FormData(this),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Hacer el fade out después de 2 segundos
                setTimeout(() => {
                    formMessage.style.opacity = 0;
                    // Opcionalmente, puedes ocultar completamente el mensaje después del fade out
                    setTimeout(() => {
                        formMessage.style.display = "none";
                        // Cerrar el popup
                        document.getElementById("newsletterPopup").classList.remove("show");
                    }, 500);
                }, 2000);

                // Limpiar el formulario
                this.reset();
            } else {
                formMessage.textContent = "Hubo un problema. Inténtalo de nuevo.";
                formMessage.style.color = "#dc3545"; // Rojo para errores
            }
        }).catch(error => {
            formMessage.textContent = "Hubo un problema. Inténtalo de nuevo.";
            formMessage.style.color = "#dc3545"; // Rojo para errores
        });
    });
});

