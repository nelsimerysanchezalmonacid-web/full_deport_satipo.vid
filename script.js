document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa Desplegable para Móviles
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav');
    const iconoMenu = menuToggle ? menuToggle.querySelector('.icono-menu') : null;

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                if (iconoMenu) iconoMenu.textContent = '✕';
            } else {
                if (iconoMenu) iconoMenu.textContent = '☰';
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace de navegación
        document.querySelectorAll('.nav a').forEach(enlace => {
            enlace.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (iconoMenu) iconoMenu.textContent = '☰';
            });
        });
    }
});