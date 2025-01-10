document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            menuToggle.textContent = '✖'; // Change to close icon
        } else {
            menuToggle.textContent = '☰'; // Change back to hamburger icon
        }
    });
});