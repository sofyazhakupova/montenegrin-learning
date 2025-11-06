// Script toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const scripts = document.querySelectorAll('.script');
    const exampleWord = document.getElementById('example-word');
    
    // Montenegrin words in both scripts
    const words = {
        latin: 'Zdravo',
        cyrillic: 'Здраво'
    };
    
    scripts.forEach(script => {
        script.addEventListener('click', function() {
            // Remove active class from all
            scripts.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked
            this.classList.add('active');
            
            // Update word display
            const selectedScript = this.dataset.script;
            exampleWord.textContent = words[selectedScript];
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

