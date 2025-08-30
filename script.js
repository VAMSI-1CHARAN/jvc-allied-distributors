// This single script handles both the hamburger menu and smooth scrolling.

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const allNavLinks = document.querySelectorAll('.nav-links li a');

// --- Hamburger Menu Logic ---
hamburger.addEventListener('click', (e) => {
    navLinks.classList.toggle('active');
    e.stopPropagation(); 
});

// --- Smooth Scrolling & Close Menu on Link Click ---
allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Smooth scroll logic
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }

        // Close mobile menu after clicking a link
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// --- Close Menu When Clicking Outside ---
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});
// === SLIDER SCRIPT ===
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.querySelectorAll("img").length;

function showSlide(index) {
    const totalSlides = slides.querySelectorAll("img").length;

    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => {
    showSlide(slideIndex - 1);
});

document.querySelector(".next").addEventListener("click", () => {
    showSlide(slideIndex + 1);
});

// Auto Slide every 5 seconds
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000);
