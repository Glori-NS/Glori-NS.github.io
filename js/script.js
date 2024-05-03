document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
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
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regular expression for email validation

    // Check email validity
    if (!email.value.match(emailRegex)) {
        alert('Please enter a valid email address.');
        valid = false;
    }

    // Check if message is not empty and has at least 30 characters
    if (message.value.trim().length < 30) {
        alert('Your message should have at least 30 characters.');
        valid = false;
    }

    // Only proceed with form submission if all validations passed
    if (valid) {
        form.submit();
    }
});
