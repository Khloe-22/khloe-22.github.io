const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy');
const closeModal = document.querySelector('.bx.bx-x');

images.forEach(images => {
    images.addEventListener('click', () => {
      addImage(images.getAttribute('src'),images.getAttribute('alt'));
    })
});

const addImage = (srcImage, altImage) => {
    containerImage.classList.toggle('move');
    containerImage.classList.toggle('show');
    imageContainer.src = srcImage;
    copy.innerHTML = altImage;
}

closeModal.addEventListener('click', () =>{
    containerImage.classList.toggle('move');
    containerImage.classList.toggle('show');
})

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

document.getElementById("menu-icon").onclick = function() {
    var mobileNav = document.getElementById("mobile-nav");
    if (mobileNav.classList.contains("active")) {
        mobileNav.classList.remove("active");
    } else {
        mobileNav.classList.add("active");
    }
};

