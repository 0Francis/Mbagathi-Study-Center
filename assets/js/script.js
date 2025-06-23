document.addEventListener('DOMContentLoaded', function() {

    // Carousel for gallery Functionality
    const galleryPage = document.querySelector('.container.gallery');
    if (galleryPage) {
        const carousels = document.querySelectorAll('.event-box');
        const prevButtons = document.querySelectorAll('.nav-buttons:nth-of-type(1)');
        const nextButtons = document.querySelectorAll('.nav-buttons:nth-of-type(2)');

        carousels.forEach((carousel, index) => {
            const scrollAmount = 300; 

            prevButtons[index].addEventListener('click', () => {
                carousel.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            nextButtons[index].addEventListener('click', () => {
                carousel.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            
        });
    }

    // Form Validating
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    console.log(`Invalid input: ${input.name || input.id}`);
                } else if (input.type === 'text' && input.value.length < 3) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    console.log(`Input too short: ${input.name || input.id}`);
                } else {
                    input.style.borderColor = '';
                }

                if (input.type === 'email' && !/^\S+@\S+\.\S+$/.test(input.value)) {
                    isValid = false;
                    input.style.borderColor = 'red';
                    console.log(`Invalid email: ${input.name || input.id}`);
                }
            });

            if (isValid) {
                alert('Form submitted successfully!');
                form.reset();
            } else {
                alert('Please fill out all required fields correctly.');
            }
        });
    });

    //Smooth page scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image Zoom Functionality
    const images = document.querySelectorAll('img:not(.logo)');
    images.forEach(img => {
        img.addEventListener('click', function() {
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            } else {
                this.classList.add('zoomed');
            }
        });
    });

    //current year in copyright
    const copyrightElements = document.querySelectorAll('.copyright');
    const currentYear = new Date().getFullYear();
    copyrightElements.forEach(element => {
        element.textContent = element.textContent.replace('2023', currentYear);
    });
});