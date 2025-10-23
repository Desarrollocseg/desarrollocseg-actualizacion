// Función para manejar el consentimiento
    document.getElementById('accept-cookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      document.getElementById('cookie-banner').style.display = 'none';
    });

    document.getElementById('reject-cookies').addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'false');
      document.getElementById('cookie-banner').style.display = 'none';
    });

    // Verificar si el usuario ya aceptó/rechazó las cookies
    if (localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookie-banner').style.display = 'none';
    }
 
