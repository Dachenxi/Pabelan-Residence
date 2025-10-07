document.addEventListener("DOMContentLoaded", function() {
    initNavigation();
})

function initNavigation() {
    const navLink = document.querySelectorAll('.menu .nav-link')

    navLink.forEach(link => {
        link.addEventListener('click', () => {
            navLink.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    })
}