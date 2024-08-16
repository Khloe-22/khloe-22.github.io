// Funciones para gestionar cookies  
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
}

// Mostrar u ocultar el banner dependiendo del estado de la cookie
window.onload = function() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieConsent = getCookie('cookieConsent');

    if (!cookieConsent) {
        cookieBanner.classList.remove('hidden');
    }

    // Aceptar cookies
    document.getElementById('acceptCookies').addEventListener('click', function() {
        setCookie('cookieConsent', 'accepted', 30);
        cookieBanner.classList.add('hidden');
    });

    // Rechazar cookies
    document.getElementById('rejectCookies').addEventListener('click', function() {
        setCookie('cookieConsent', 'rejected', 30);
        cookieBanner.classList.add('hidden');
    });

    // Usando cookie-session
    app.use(session({
    secret: 'mySecret',
    cookie: {
      sameSite: 'Strict' // O 'Lax' o 'None'
    }
  }));
  
  // Usando res.cookie
  res.cookie('nombreCookie', 'valorCookie', { 
    sameSite: 'Strict', // O 'Lax' o 'None'
    secure: true // Necesario si usas SameSite=None
  });
  
};
