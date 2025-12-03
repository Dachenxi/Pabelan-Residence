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

const propertyDict = [
    {
        id: 1,
        title: "Luxury Villa with Pool",
        price: "$1,250,000",
        location: "Beverly Hills, CA",
        image: "https://plus.unsplash.com/premium_photo-1733760125497-cd51a05afc6c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "Akasia",
        beds: 5,
        baths: 4,
        area: "5,200 sq ft",
        status: "Dijual"
    },
    {
        id: 2,
        title: "Modern Downtown Apartment",
        price: "$750,000",
        location: "New York, NY",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "Akasia",
        beds: 3,
        baths: 2,
        area: "2,100 sq ft",
        status: "Disewakan"
    },
    {
        id: 3,
        title: "Cozy Family House",
        price: "$580,000",
        location: "Austin, TX",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600",
        type: "Bougenville",
        beds: 4,
        baths: 3,
        area: "3,500 sq ft",
        status: "Dijual"
    },
    {
        id: 4,
        title: "Beachfront Property",
        price: "$2,100,000",
        location: "Malibu, CA",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
        type: "Bougenville",
        beds: 6,
        baths: 5,
        area: "6,800 sq ft",
        status: "Disewakan"
    },
    {
        id: 5,
        title: "City Center Penthouse",
        price: "$1,800,000",
        location: "Miami, FL",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
        type: "Sapphire",
        beds: 4,
        baths: 3,
        area: "4,200 sq ft",
        status: "Disewakan"
    },
    {
        id: 6,
        title: "Suburban Dream Home",
        price: "$420,000",
        location: "Portland, OR",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600",
        type: "Sapphire",
        beds: 3,
        baths: 2,
        area: "2,800 sq ft",
        status: "Dijual"
    },
    {
        id: 7,
        title: "Mountain View Villa",
        price: "$3,500,000",
        location: "Aspen, CO",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600",
        type: "Ruby",
        beds: 7,
        baths: 6,
        area: "8,500 sq ft",
        status: "Dijual"
    },
    {
        id: 8,
        title: "Urban Loft Space",
        price: "$620,000",
        location: "Chicago, IL",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600",
        type: "Ruby",
        beds: 2,
        baths: 2,
        area: "1,800 sq ft",
        status: "Disewakan"
    },
    {
        id: 9,
        title: "Big White House",
        price: "$100,000,000",
        location: "Seattle, WA",
        image: "images/Foto/PresidentHouse.jpg",
        type: "Diamond",
        beds: 0,
        baths: 0,
        area: "10,000 sq ft",
        status: "Dijual"
    }
]

// Pindahkan timer ke scope global agar bisa diakses fungsi lain
let autoPlayTimer;

document.addEventListener("DOMContentLoaded", function() {
    initHamburgerMenu();
    loadProperties();
    initNavigation();
    initMenuSlider();
    initFilterButton();
    initStats();
    initTestimonials();
    searchProperties();
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

function loadProperties() {
    const grid = document.getElementById('propertiesGrid');

    grid.innerHTML = propertyDict.map(property => `
        <div class="property-card" data-type="${property.type}">
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">${property.status}</span>
            </div>
            <div class="property-content">
                <div class="property-price">${property.price}</div>
                <h3 class="property-title">${property.title}</h3>
                <div class="property-location">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.location}</span>
                </div>
                <div class="property-features">
                    ${property.beds > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.beds} Beds</span>
                    </div>
                    ` : ''}
                    ${property.baths > 0 ? `
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.baths} Baths</span>
                    </div>
                    ` : ''}
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.area}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initTestimonials() {
    const slider = document.getElementById('testimonialSlider');
    const dotsContainer = document.getElementById('testimonialSlideControls');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    
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

    dotsContainer.innerHTML = testimonialDict.map((_, index) => `
        <span class="testimonial-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>
    `).join('');
    
    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        autoPlayTimer = setInterval(() => {
            const currentActiveIndex = Array.from(slider.children).findIndex(item => item.classList.contains('active'));
            const nextIndex = (currentActiveIndex + 1) % testimonialDict.length;
            showTestimonial(nextIndex);
        }, 6000);
    }
    
    nextBtn.addEventListener('click', () => {
        const currentActiveIndex = Array.from(slider.children).findIndex(item => item.classList.contains('active'));
        const nextIndex = (currentActiveIndex + 1) % testimonialDict.length;
        showTestimonial(nextIndex);
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        const currentActiveIndex = Array.from(slider.children).findIndex(item => item.classList.contains('active'));
        const prevIndex = (currentActiveIndex - 1 + testimonialDict.length) % testimonialDict.length;
        showTestimonial(prevIndex);
        resetAutoPlay();
    });

    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            showTestimonial(index);
            resetAutoPlay();
        });
    });
    
    resetAutoPlay();
}

function showTestimonial(index) {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-dot');

    items.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    items[index].classList.add('active');
    dots[index].classList.add('active');
}

// Fungsi Search di Search Bar
function searchProperties() {
    const searchButton = document.getElementById('searchBarButton')
    searchButton.addEventListener('click', () => {
        const statusFilter = document.getElementsByClassName('search-tab active')[0].value;
        const locationInput = document.getElementById('locationFilter').value;
        const typeInput = document.getElementById('filterType').value;
        const priceInput = document.getElementById('filterPrice').value;

        if (!locationInput && typeInput === 'all' && priceInput === 'all') {
            alert("Tolong masukkan setidaknya satu kriteria pencarian.");
            loadProperties('all');
            return;
        }

        let filteredProperties = propertyDict;

        if (statusFilter) {
            filteredProperties = filteredProperties.filter(p => 
                p.status.toLowerCase() === statusFilter.toLowerCase()
            );
        }

        if (locationInput) {
            filteredProperties = filteredProperties.filter(p => 
                p.location.toLowerCase().includes(locationInput.toLowerCase())
            );
        }

        if (typeInput) {
            filteredProperties = filteredProperties.filter(p => 
                p.type.toLowerCase() === typeInput.toLowerCase()
            );
        }

        if (priceInput) {
            filteredProperties = filteredProperties.filter(p => {
                const priceValue = parseInt(p.price.replace(/[^0-9]/g, ''));
                if (priceInput === '') return true;
                if (priceInput === '500') return priceValue <= 500000;
                if (priceInput === '500-1000') return priceValue > 500000 && priceValue <= 1000000;
                if (priceInput === '1000-2000') return priceValue > 1000000 && priceValue <= 2000000;
                if (priceInput === '2000+') return priceValue > 2000000;
                return true;
            });
        }

        window.scrollTo({
                    top: document.getElementById('propertiesGrid').offsetTop - document.querySelector('.header').offsetHeight,
                    behavior: 'smooth'
                });


        const grid = document.getElementById('propertiesGrid');
        grid.innerHTML = filteredProperties.map(property => `
            <div class="property-card" data-type="${property.type}">
                <div class="property-image">
                    <img src="${property.image}" alt="${property.title}">
                    <span class="property-badge">${property.status}</span>
                </div>
                <div class="property-content">
                    <div class="property-price">${property.price}</div>
                    <h3 class="property-title">${property.title}</h3>
                    <div class="property-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${property.location}</span>
                    </div>
                    <div class="property-features">
                        ${property.beds > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bed"></i>
                            <span>${property.beds} Beds</span>
                        </div>
                        ` : ''}
                        ${property.baths > 0 ? `
                        <div class="feature">
                            <i class="fas fa-bath"></i>
                            <span>${property.baths} Baths</span>
                        </div>
                        ` : ''}
                        <div class="feature">
                            <i class="fas fa-ruler-combined"></i>
                            <span>${property.area}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    })
}

// Property Card Click Handler
document.addEventListener('click', function(e) {
    const card = e.target.closest('.property-card');
    if (card && !e.target.closest('.property-favorite')) {
        const propertyId = Array.from(card.parentElement.children).indexOf(card) + 1;
        showPropertyDetails(propertyId);
    }
});

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
}

// Fungsi utama Anda yang sudah diperbaiki
function showPropertyDetails(id) {
    const property = propertyDict[id - 1];
    if (!property) return;

    // 1. Targetkan modal yang SUDAH ADA, jangan buat baru
    const modal = document.getElementById('propertyModal');

    // 2. Isi konten modal dengan innerHTML
    modal.innerHTML = `
        <div class="detail-content">
            <button class="close-modal" onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button> 
            <div class="detail-property-image">
                <img src="${property.image}" alt="${property.title}">
            </div>
            <div class="detail-property-info">
                <h2>${property.title}</h2>
                <div class="detail-property-stat">
                    <div class="property-stat-group">
                        <div class="property-stat">
                            <i class="fa-solid fa-dollar-sign"></i>
                            <strong>Price:</strong> ${property.price}
                        </div>
                        <div>
                            <i class="fa-solid fa-comments-dollar"></i>
                            <strong>Status:</strong> ${property.status}
                        </div>
                        <div>
                            <i class="fa-solid fa-location-crosshairs"></i>
                            <strong>Location:</strong> ${property.location}
                        </div>
                        <div>
                            <i class="fa-solid fa-building-columns"></i>
                            <strong>Type:</strong> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                        </div>
                    </div>
                    <div class="property-stat-group">
                        <div>
                            <i class="fa-solid fa-bed-front"></i>
                            <strong>Bedrooms:</strong> ${property.beds}
                        </div>
                        <div>
                            <i class="fa-solid fa-bath"></i>
                            <strong>Bathrooms:</strong> ${property.baths}
                        </div>
                        <div>
                            <i class="fa-solid fa-ruler-horizontal"></i>
                            <strong>Area:</strong> ${property.area}
                        </div>
                    </div>
                    
                </div>
                <p style="margin: 1.5rem 0; line-height: 1.8; color: var(--text-color);">
                    This stunning ${property.type} offers exceptional living spaces with modern amenities. 
                    Located in the prestigious ${property.location} area, this property provides the perfect 
                    combination of luxury and comfort. Features include spacious rooms, high-end finishes, 
                    and premium appliances throughout.
                </p>
                <div class="detail-btn">
                    <button class="btn-primary" onclick="alert('Schedule a tour feature coming soon!')">
                        <i class="fas fa-calendar"></i> Schedule Tour
                    </button>
                    <button class="btn-secondary" onclick="alert('Contact agent feature coming soon!')">
                        <i class="fas fa-phone"></i> Contact Agent
                    </button>
                </div>
            </div>
        </div>
    `;

    // 3. Tampilkan modal dengan menambahkan kelas 'active'
    modal.classList.add('active');
}
