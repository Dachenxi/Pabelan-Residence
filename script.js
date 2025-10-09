document.addEventListener("DOMContentLoaded", function() {
    initHamburgerMenu();
    initNavigation();
})

function initNavigation() {
    const navLink = document.querySelectorAll('.menu .nav-link')
    const header = document.querySelector('.header')
    const navbarMenu = document.getElementById('navbar-menu')

    navLink.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault()
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            navLink.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            setTimeout(() => {
                navbarMenu.classList.remove('active');
            }, 300);
        });
    })
}


function initHamburgerMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
}