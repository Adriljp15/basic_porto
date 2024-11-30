document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('li');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        navLinks.classList.toggle('transparent');
    });

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            event.preventDefault();
            const targetId = item.querySelector('a').getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length;
let slideInterval; 

// Menyembunyikan semua slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none'; 
    });
}

// Menampilkan slide pertama
showSlide(currentSlide);

// Fungsi untuk mengganti slide
function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
    showSlide(currentSlide);
    resetInterval(); 
}


function startInterval() {
    slideInterval = setInterval(() => changeSlide(1), 3000);
}


function resetInterval() {
    clearInterval(slideInterval);
    startInterval(); 
}


startInterval();
