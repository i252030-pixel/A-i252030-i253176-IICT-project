// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ toggle
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = answer.classList.contains('active');
                
                // Close all answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                
                // Update all icons
                document.querySelectorAll('.faq-question span').forEach(icon => {
                    icon.textContent = '+';
                });
                
                // If not active, open this one
                if (!isActive) {
                    answer.classList.add('active');
                    this.querySelector('span').textContent = '−';
                }
            });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will respond within 24 hours.');
            this.reset();
        });
    }
    
    // Billing form submission
    const billingForm = document.getElementById('billing-form');
    if (billingForm) {
        billingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your purchase! Your subscription is now active.');
            this.reset();
        });
    }
    
    // Search functionality
    const searchButton = document.querySelector('.search-container button');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchInput = document.querySelector('.search-container input');
            if (searchInput.value.trim()) {
                alert(`Searching for: ${searchInput.value}`);
                searchInput.value = '';
            }
        });
    }
});