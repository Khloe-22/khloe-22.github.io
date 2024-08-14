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

document.getElementById('menuToggle').addEventListener('click', function() {
    var navList = document.querySelector('.header__nav-list');
    navList.classList.toggle('active');
});

