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
                        indicator.classList.add('bg-tertiary', 'w-6');
                    } else {
                        indicator.classList.add('bg-white/50');
                        indicator.classList.remove('bg-tertiary', 'w-6');
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

        // Testimonials Carousel
        class TestimonialCarousel {
            constructor() {
                this.track = document.querySelector('.testimonial-track');
                this.slides = document.querySelectorAll('.testimonial-slide');
                this.indicators = document.querySelectorAll('.testimonial-indicator');
                this.prevBtn = document.querySelector('.testimonial-prev');
                this.nextBtn = document.querySelector('.testimonial-next');
                this.currentSlide = 0;
                this.slideCount = this.slides.length;
                this.autoplayInterval = null;
                this.autoplayDelay = 6000;

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
                const container = document.querySelector('.testimonial-carousel');
                if (container) {
                    container.addEventListener('mouseenter', () => this.stopAutoplay());
                    container.addEventListener('mouseleave', () => this.startAutoplay());
                }

                // Touch/swipe support
                this.setupTouchSupport();
            }

            setupTouchSupport() {
                const track = this.track;
                if (!track) return;

                let touchStartX = 0;
                let touchEndX = 0;

                track.addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                }, { passive: true });

                track.addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    const diff = touchStartX - touchEndX;
                    if (Math.abs(diff) > 50) {
                        if (diff > 0) {
                            this.nextSlide();
                        } else {
                            this.prevSlide();
                        }
                        this.resetAutoplay();
                    }
                }, { passive: true });
            }

            goToSlide(index) {
                this.currentSlide = index;
                this.track.style.transform = `translateX(-${index * 100}%)`;
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
                        indicator.classList.remove('bg-tertiary/30', 'w-2');
                        indicator.classList.add('bg-tertiary', 'w-4');
                    } else {
                        indicator.classList.add('bg-tertiary/30', 'w-2');
                        indicator.classList.remove('bg-tertiary', 'w-4');
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

        // FAQ Accordion
        class FAQAccordion {
            constructor() {
                this.faqItems = document.querySelectorAll('.faq-item');
                this.init();
            }

            init() {
                this.faqItems.forEach(item => {
                    const trigger = item.querySelector('.faq-trigger');
                    const content = item.querySelector('.faq-content');
                    const icon = trigger.querySelector('.material-symbols-outlined:last-child');

                    trigger.addEventListener('click', () => {
                        const isOpen = item.classList.contains('open');

                        // Close all other items
                        this.faqItems.forEach(otherItem => {
                            if (otherItem !== item && otherItem.classList.contains('open')) {
                                otherItem.classList.remove('open');
                                const otherContent = otherItem.querySelector('.faq-content');
                                const otherIcon = otherItem.querySelector('.faq-trigger .material-symbols-outlined:last-child');
                                otherContent.style.maxHeight = '0';
                                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                            }
                        });

                        // Toggle current item
                        if (isOpen) {
                            item.classList.remove('open');
                            content.style.maxHeight = '0';
                            if (icon) icon.style.transform = 'rotate(0deg)';
                        } else {
                            item.classList.add('open');
                            content.style.maxHeight = content.scrollHeight + 'px';
                            if (icon) icon.style.transform = 'rotate(180deg)';
                        }
                    });
                });
            }
        }

        // Initialize testimonial carousel and FAQ
        document.addEventListener('DOMContentLoaded', () => {
            new TestimonialCarousel();
            new FAQAccordion();
        });

        // Mobile Menu Toggle
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                    const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
                    if (mobileMenu.classList.contains('hidden')) {
                        icon.textContent = 'menu';
                    } else {
                        icon.textContent = 'close';
                    }
                });

                // Close mobile menu when clicking a link
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.add('hidden');
                        const icon = mobileMenuBtn.querySelector('.material-symbols-outlined');
                        icon.textContent = 'menu';
                    });
                });
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to Top Button
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) {
                    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                    backToTopBtn.classList.add('opacity-100');
                } else {
                    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                    backToTopBtn.classList.remove('opacity-100');
                }
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
