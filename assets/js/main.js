// Scroll reveal animations + navbar shrink-on-scroll behavior
// Simple Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Smooth Navbar Shrink
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'bg-white/90', 'dark:bg-on-background/90');
                nav.classList.remove('py-4', 'bg-transparent');
            } else {
                nav.classList.remove('py-2', 'bg-white/90', 'dark:bg-on-background/90');
                nav.classList.add('py-4', 'bg-transparent');
            }
        });
