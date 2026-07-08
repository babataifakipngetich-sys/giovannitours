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

        // Hero Carousel
        class HeroCarousel {
            constructor() {
                this.slides = document.querySelectorAll('.carousel-slide');
                this.indicators = document.querySelectorAll('.carousel-indicator');
                this.prevBtn = document.querySelector('.carousel-prev');
                this.nextBtn = document.querySelector('.carousel-next');
                this.currentSlide = 0;
                this.slideCount = this.slides.length;
                this.autoplayInterval = null;
                this.autoplayDelay = 5000;

                if (this.slides.length > 0) {
                    this.init();
                }
            }

            init() {
                this.updateIndicators();

                // Autoplay
                this.startAutoplay();

                // Navigation buttons
                if (this.prevBtn) {
                    this.prevBtn.addEventListener('click', () => {
                        this.prevSlide();
                        this.resetAutoplay();
                    });
                }

                if (this.nextBtn) {
                    this.nextBtn.addEventListener('click', () => {
                        this.nextSlide();
                        this.resetAutoplay();
                    });
                }

                // Indicator clicks
                this.indicators.forEach((indicator, index) => {
                    indicator.addEventListener('click', () => {
                        this.goToSlide(index);
                        this.resetAutoplay();
                    });
                });

                // Pause on hover
                const heroSection = document.querySelector('header');
                if (heroSection) {
                    heroSection.addEventListener('mouseenter', () => this.stopAutoplay());
                    heroSection.addEventListener('mouseleave', () => this.startAutoplay());
                }

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        this.prevSlide();
                        this.resetAutoplay();
                    } else if (e.key === 'ArrowRight') {
                        this.nextSlide();
                        this.resetAutoplay();
                    }
                });

                // Touch/swipe support
                this.setupTouchSupport();
            }

            setupTouchSupport() {
                const carouselContainer = document.querySelector('.hero-carousel');
                if (!carouselContainer) return;

                let touchStartX = 0;
                let touchEndX = 0;

                carouselContainer.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });

                carouselContainer.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    this.handleSwipe(touchStartX, touchEndX);
                }, { passive: true });
            }

            handleSwipe(startX, endX) {
                const swipeThreshold = 50;
                const diff = startX - endX;

                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                    this.resetAutoplay();
                }
            }

            goToSlide(index) {
                this.slides[this.currentSlide].classList.remove('opacity-100');
                this.slides[this.currentSlide].classList.add('opacity-0');

                this.currentSlide = index;

                this.slides[this.currentSlide].classList.remove('opacity-0');
                this.slides[this.currentSlide].classList.add('opacity-100');

                this.updateIndicators();
            }

            nextSlide() {
                const nextIndex = (this.currentSlide + 1) % this.slideCount;
                this.goToSlide(nextIndex);
            }

            prevSlide() {
                const prevIndex = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
                this.goToSlide(prevIndex);
            }

            updateIndicators() {
                this.indicators.forEach((indicator, index) => {
                    if (index === this.currentSlide) {
                        indicator.classList.remove('bg-white/50');
                        indicator.classList.add('bg-primary', 'w-6');
                    } else {
                        indicator.classList.add('bg-white/50');
                        indicator.classList.remove('bg-primary', 'w-6');
                    }
                });
            }

            startAutoplay() {
                if (this.autoplayInterval) return;
                this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
            }

            stopAutoplay() {
                if (this.autoplayInterval) {
                    clearInterval(this.autoplayInterval);
                    this.autoplayInterval = null;
                }
            }

            resetAutoplay() {
                this.stopAutoplay();
                this.startAutoplay();
            }
        }

        // Initialize carousel
        document.addEventListener('DOMContentLoaded', () => {
            new HeroCarousel();
        });
