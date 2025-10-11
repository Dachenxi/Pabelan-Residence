document.addEventListener("DOMContentLoaded", function() {
    initHamburgerMenu();
    initNavigation();
    initMenuSlider();
    initFilterButton();
    initStats()
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

function initMenuSlider() {
    const slider = document.querySelectorAll('.home-slide');
    const prevBtn = document.getElementById('homePrev');
    const nextBtn = document.getElementById('homeNext');
    let slideIndex = 0;
    let autoPlayTimer;

    function changeSlide(index) {
        slider.forEach(slide => slide.classList.remove('active'));
        const activeSlide = slider[index];
        activeSlide.classList.add('active');

        const animatedElements = activeSlide.querySelectorAll('.home-content .title, .home-content .subtitle');
        animatedElements.forEach(element => {
            element.style.animation = 'none';
            void element.offsetWidth;
            element.style.animation = '';
        });
    }

    function goToNextSlide() {
        slideIndex = (slideIndex + 1) % slider.length;
        changeSlide(slideIndex);
    }

    function goToPrevSlide() {
        slideIndex = (slideIndex - 1 + slider.length) % slider.length;
        changeSlide(slideIndex);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(goToNextSlide, 5000);
    }

    nextBtn.addEventListener('click', () => {
        goToNextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        goToPrevSlide();
        resetAutoPlay();
    });

    resetAutoPlay();
}

function initFilterButton() {
    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            searchTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
}

function initStats() {
    const statsNumber = document.querySelectorAll('.stats-number')
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'))
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statsNumber.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 30);
}