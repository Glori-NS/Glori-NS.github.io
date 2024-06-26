// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enhanced Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission until validation is complete
    let valid = true;
    const email = document.querySelector('input[type="email"]');
    const message = document.querySelector('textarea');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Reset visual feedback
    email.style.border = '1px solid #ccc';
    message.style.border = '1px solid #ccc';

    // Check email validity
    if (!email.value.match(emailRegex)) {
        email.style.border = '2px solid red';
        valid = false;
    }

    // Check if message is not empty and has at least 30 characters
    if (message.value.trim().length < 30) {
        message.style.border = '2px solid red';
        valid = false;
    }

    // Only proceed with form submission if all validations passed
    if (valid) {
        alert('Message sent successfully!');
        form.submit();
    }
});

// Fade-in effect for elements with the class 'fade-in'
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 2s ease-in-out';
        element.style.opacity = 1;
    });
});

// Hover effect for project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    });
});
