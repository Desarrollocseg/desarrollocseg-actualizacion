window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    
    var sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        } else {
        navbar.classList.remove("sticky");
           }
}

document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuItems = document.getElementById('menu-items');
    menuItems.style.display = (menuItems.style.display === 'block') ? 'none' : 'block';

});

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener('resize', function() {
    var menuItems = document.getElementById('menu-items');
    // Verificar el ancho de la ventana
    if (window.innerWidth > 601) { // Cambia este valor según tu punto de ruptura para escritorio
        menuItems.style.display = 'flex'; // Restablecer a 'flex' en escritorio
    } else {
        menuItems.style.display = 'none'; // Ocultar el menú en dispositivos móviles por defecto
    }
});


//index
document.getElementById('menu-toggle-index').addEventListener('click', function() {
    var menuItemsIndex = document.getElementById('menu-items-index');
    menuItemsIndex.style.display = (menuItemsIndex.style.display === 'block') ? 'none' : 'block';

});

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener('resize', function() {
    var menuItemsIndex = document.getElementById('menu-items-index');
    // Verificar el ancho de la ventana
    if (window.innerWidth > 601) { // Cambia este valor según tu punto de ruptura para escritorio
        menuItemsIndex.style.display = 'flex'; // Restablecer a 'flex' en escritorio
    } else {
        menuItemsIndex.style.display = 'none'; // Ocultar el menú en dispositivos móviles por defecto
    }
});
