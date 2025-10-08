document.addEventListener("DOMContentLoaded", function() {
    initNavigation();
})

function initNavigation() {
    const navLink = document.querySelectorAll('.menu .nav-link')
    const header = document.querySelector('.header')
    
    navLink.forEach(link => {
        link.addEventListener('click', (event) => {
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
        });
    })
}