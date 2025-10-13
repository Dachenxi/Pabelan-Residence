const testimonialDict = [
    {
        id: 1,
        name: "Muchammad Abdurohim",
        role: "Bapak Rumah Tangga",
        image: "https://i.ibb.co.com/VYvPWhhd/Ohim.jpg",
        text: "Pabelan residence bukanlah sebuah hunian biasa. Dengan desain modern dan fasilitas lengkap, tempat ini memberikan kenyamanan maksimal bagi keluarga saya.",
        rating: 5
    },
    {
        id: 2,
        name: "Giga Hidro Pratama Dwi Irwansyah Maulana",
        role: "Property Investor",
        image: "https://i.ibb.co.com/v6WBCvf4/image.png",
        text: "Saya tau ini dari teman saya, dan ternyata memang benar. Pabelan residence memberikan pengalaman tinggal yang luar biasa dengan lingkungan yang asri dan fasilitas yang memadai.",
        rating: 5
    },
    {
        id: 3,
        name: "Gibran Maulana rakhabooming",
        role: "Penerus Orang Tua",
        image: "https://i.ibb.co.com/SXKr9X8b/image.png",
        text: "Rumah di Pabelan residence adalah pilihan tepat bagi saya yang menginginkan tempat tinggal di solo yang nyaman dan strategis. Lokasinya yang dekat dengan pusat kota membuat segala aktivitas menjadi lebih mudah.",
        rating: 5
    }
]

document.addEventListener("DOMContentLoaded", function() {
    initHamburgerMenu();
    initNavigation();
    initMenuSlider();
    initFilterButton();
    initStats();
    initTestimonials()
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

function initTestimonials() {
    const slider = document.getElementById('testimonialSlider');
    const dots = document.getElementById('testimonialSlideControls');

    slider.innerHTML = testimonialDict.map((testimonial, index) => `
    <div class="testimonial-item ${index === 0 ? 'active' : ''}">
        <div class="testimonial-image">
            <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-text">"${testimonial.text}"</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-role">${testimonial.role}</div>
        <div class="testimonial-rating">
            ${'<i class="fa-solid fa-star"></i>'.repeat(testimonial.rating)}
        </div>
    </div>
    `).join('');

    dots.innerHTML = testimonialDict.map((_, index) => `
        <span class="testimonial-dot ${index === 0 ? 'active' : ''}" onclick="showTestimonial(${index})"></span>
    `).join('');

    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialDict.length;
        showTestimonial(currentTestimonial);
    }, 6000);
}

function showTestimonial(index) {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dot');

    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[index].classList.add('active');
    dots[index].classList.add('active');
}