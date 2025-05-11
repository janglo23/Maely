// Removed event listeners for non-existent elements to prevent errors
// document.getElementById('rsvp-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Thank you for your RSVP!');
// });

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Your message has been sent!');
// });

// Auto-sliding functionality for the slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}

// Add fade-in effect for sections as they appear in the viewport
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add scroll animation for the event details section
document.addEventListener('DOMContentLoaded', function() {
    const eventDetails = document.getElementById('event-details');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(eventDetails);
});

// Add back-to-top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.createElement('button');
    backToTopButton.id = 'back-to-top';
    backToTopButton.innerHTML = '&#8679;';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.style.display = 'none';
});

// Play background music on scroll
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;

window.addEventListener('scroll', () => {
    if (!isMusicPlaying) {
        backgroundMusic.play();
        isMusicPlaying = true;
    }
});
