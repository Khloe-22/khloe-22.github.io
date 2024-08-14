const nombre = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById('tel');
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }

    const telPattern = /^[0-9]{10}$/;
    if (!telPattern.test(tel.value)) {
        warnings += 'El teléfono debe tener 10 dígitos.<br>';
        entrar = true;
    }

    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`;
        entrar = true;
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
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
