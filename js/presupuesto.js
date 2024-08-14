document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-solicitud');
    const producto = document.getElementById('producto');
    const plazo = document.getElementById('plazo');
    const extras = document.querySelectorAll('input[name="extra"]');
    const presupuesto = document.getElementById('presupuesto');

    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');

    const nombreError = document.getElementById('nombreError');
    const apellidosError = document.getElementById('apellidosError');
    const telefonoError = document.getElementById('telefonoError');
    const emailError = document.getElementById('emailError');

    function calcularPresupuesto() {
        let total = parseFloat(producto.value);
        let plazoMeses = parseInt(plazo.value);
        let descuento = 1;

        if (plazoMeses >= 6) {
            descuento = 0.9;
        }

        extras.forEach(extra => {
            if (extra.checked) {
                total += parseFloat(extra.value);
            }
        });

        total = total * descuento;

        presupuesto.value = `$${total.toFixed(2)}`;
    }

    function validarFormulario(event) {
        let esValido = true;

        if (nombre.value.trim() === '') {
            nombreError.textContent = 'El nombre es requerido.';
            esValido = false;
        } else {
            nombreError.textContent = '';
        }

        if (apellidos.value.trim() === '') {
            apellidosError.textContent = 'Los apellidos son requeridos.';
            esValido = false;
        } else {
            apellidosError.textContent = '';
        }

        const telefonoPattern = /^[0-9]{10}$/;
        if (!telefonoPattern.test(telefono.value)) {
            telefonoError.textContent = 'El teléfono debe tener 10 dígitos.';
            esValido = false;
        } else {
            telefonoError.textContent = '';
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'El email no es válido.';
            esValido = false;
        } else {
            emailError.textContent = '';
        }

        if (!esValido) {
            event.preventDefault();
        }
    }

    formulario.addEventListener('submit', validarFormulario);

    producto.addEventListener('change', calcularPresupuesto);
    plazo.addEventListener('input', calcularPresupuesto);
    extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));
    calcularPresupuesto();
});

// Newsletter
document.addEventListener("DOMContentLoaded", function() {
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
});

