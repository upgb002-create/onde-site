/* ==========================================================================
   ONDÉ OFFICIAL WEBSITE - INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. INTRO ANIMATION SCREEN
       ========================================================================== */
    const introScreen = document.getElementById('intro-screen');
    const animateOnLoadElements = document.querySelectorAll('.animate-on-load');

    // Disable scrolling during intro animation
    document.body.style.overflow = 'hidden';

    // Start intro timer (3 seconds)
    setTimeout(() => {
        if (introScreen) {
            introScreen.classList.add('fade-out');
            
            // Re-enable scrolling
            document.body.style.overflow = '';
            
            // Trigger home section entrance animations
            setTimeout(() => {
                animateOnLoadElements.forEach(el => {
                    el.classList.add('loaded');
                });
                // Remove from DOM to save resources
                introScreen.style.display = 'none';
            }, 800); // Wait for fade-out transition to complete
        }
    }, 3200);


    /* ==========================================================================
       2. MOBILE MENU OVERLAY
       ========================================================================== */
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    const toggleMobileMenu = () => {
        mobileMenuBtn.classList.toggle('open');
        mobileMenuOverlay.classList.toggle('open');
        
        // Prevent body scroll when menu is open
        if (mobileMenuOverlay.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking a link
        mobileNavItems.forEach(item => {
            item.addEventListener('click', () => {
                toggleMobileMenu();
                // Smooth scroll to target is handled by CSS / default HTML anchor
            });
        });
    }


    /* ==========================================================================
       3. STICKY NAV & SCROLL SPY
       ========================================================================== */
    const headerNav = document.querySelector('.header-nav');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        const scrollPos = window.scrollY;

        // Sticky Nav styling
        if (scrollPos > 50) {
            headerNav.classList.add('scrolled');
        } else {
            headerNav.classList.remove('scrolled');
        }

        // Scroll Spy active states
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // offset for sticky nav height
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${currentSectionId}`) {
                    item.classList.add('active');
                }
            });
        }
    };

    window.addEventListener('scroll', handleScroll);


    /* ==========================================================================
       4. INTERSECTION OBSERVER FOR SCROLL REVEALS
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Unobserve once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport fully
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    /* ==========================================================================
       5. DISCOGRAPHY B-SIDE PREVIEWS - MUTUAL EXCLUSION
       ========================================================================== */
    const audioPlayers = document.querySelectorAll('.custom-audio-player');

    audioPlayers.forEach(player => {
        // Pause other audio players when one starts playing
        player.addEventListener('play', () => {
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });
    });


    /* ==========================================================================
       6. INTERACTIVE OFFICIAL LIGHT STICK CONTROLLER
       ========================================================================== */
    const lsSvg = document.getElementById('lightstick-svg');
    const lsAmbient = document.getElementById('ls-glow-ambient');
    const btnPower = document.getElementById('btn-ls-power');
    const btnColors = document.querySelectorAll('.btn-color');
    const btnModes = document.querySelectorAll('.btn-mode');
    const detailBoxes = document.querySelectorAll('.clickable-view');

    // SVG Gradient stop elements
    const glowStopInner = document.getElementById('glow-stop-inner');
    const glowStopMid = document.getElementById('glow-stop-mid');
    const glowStopOuter = document.getElementById('glow-stop-outer');
    
    // Front/Back view SVG components
    const svgPowerBtn = document.getElementById('svg-power-btn');
    const lsInnerCore = document.getElementById('ls-inner-core');

    let isPowered = false;
    let currentGlowColor = 'harmony';
    let currentLightMode = 'steady';

    // Color definitions
    const colors = {
        harmony: {
            inner: '#ffffff',
            mid: '#E85C4A', // Coral red base
            outer: '#1B2F6E', // Navy base
            ambient: 'radial-gradient(circle, rgba(232, 92, 74, 0.35) 0%, rgba(27, 47, 110, 0.2) 50%, rgba(245, 208, 64, 0.1) 100%)'
        },
        coral: {
            inner: '#ffffff',
            mid: '#E85C4A',
            outer: 'rgba(232, 92, 74, 0)',
            ambient: 'radial-gradient(circle, rgba(232, 92, 74, 0.55) 0%, rgba(232, 92, 74, 0.15) 60%, transparent 100%)'
        },
        blue: {
            inner: '#ffffff',
            mid: '#1B2F6E',
            outer: 'rgba(27, 47, 110, 0)',
            ambient: 'radial-gradient(circle, rgba(27, 47, 110, 0.7) 0%, rgba(27, 47, 110, 0.2) 60%, transparent 100%)'
        },
        yellow: {
            inner: '#ffffff',
            mid: '#F5D040',
            outer: 'rgba(245, 208, 64, 0)',
            ambient: 'radial-gradient(circle, rgba(245, 208, 64, 0.55) 0%, rgba(245, 208, 64, 0.15) 60%, transparent 100%)'
        }
    };

    // Update Light Stick SVG and Ambient element colors
    const updateLightStickColors = (colorKey) => {
        const theme = colors[colorKey];
        if (!theme) return;

        // Apply SVG attribute color shifts
        if (glowStopInner) glowStopInner.setAttribute('stop-color', theme.inner);
        if (glowStopMid) glowStopMid.setAttribute('stop-color', theme.mid);
        if (glowStopOuter) glowStopOuter.setAttribute('stop-color', theme.outer);

        // Apply Ambient glowing backdrop color
        if (lsAmbient) {
            lsAmbient.style.background = theme.ambient;
        }
    };

    // Toggle Lightstick Power
    const setPowerState = (state) => {
        isPowered = state;

        if (isPowered) {
            // UI state updates
            btnPower.classList.add('on');
            btnPower.innerHTML = '<i class="fa-solid fa-power-off"></i> ON';
            lsSvg.classList.add('ls-powered');
            
            // Enable color & mode buttons
            btnColors.forEach(btn => btn.removeAttribute('disabled'));
            btnModes.forEach(btn => btn.removeAttribute('disabled'));

            // Turn on ambient light
            if (lsAmbient) lsAmbient.style.opacity = '1';

            // Apply selected color & mode
            updateLightStickColors(currentGlowColor);
            applyModeState(currentLightMode);
        } else {
            // UI state updates
            btnPower.classList.remove('on');
            btnPower.innerHTML = '<i class="fa-solid fa-power-off"></i> OFF';
            
            // Reset SVG classes
            lsSvg.classList.remove('ls-powered', 'ls-mode-steady', 'ls-mode-flow', 'ls-mode-strobe');
            
            // Disable color & mode buttons
            btnColors.forEach(btn => btn.setAttribute('disabled', 'true'));
            btnModes.forEach(btn => btn.setAttribute('disabled', 'true'));

            // Turn off ambient light
            if (lsAmbient) lsAmbient.style.opacity = '0';

            // Turn off SVG light glow (opacity 0)
            const lightGlow = document.getElementById('ls-light-glow');
            if (lightGlow) lightGlow.setAttribute('opacity', '0');
        }
    };

    // Apply lighting animation modes (Steady / Flow / Strobe)
    const applyModeState = (modeKey) => {
        currentLightMode = modeKey;
        if (!isPowered) return;

        // Reset classes
        lsSvg.classList.remove('ls-mode-steady', 'ls-mode-flow', 'ls-mode-strobe');

        // Toggle classes that control CSS animation rates
        if (modeKey === 'steady') {
            lsSvg.classList.add('ls-mode-steady');
        } else if (modeKey === 'flow') {
            lsSvg.classList.add('ls-mode-flow');
        } else if (modeKey === 'strobe') {
            lsSvg.classList.add('ls-mode-strobe');
        }
    };

    // Click handler for Power Button
    if (btnPower) {
        btnPower.addEventListener('click', () => {
            setPowerState(!isPowered);
        });
    }

    // Click handler for Power button in SVG itself
    if (svgPowerBtn) {
        svgPowerBtn.addEventListener('click', () => {
            setPowerState(!isPowered);
        });
    }

    // Click handlers for Color Buttons
    btnColors.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!isPowered) return;
            
            btnColors.forEach(b => b.classList.remove('active'));
            const targetBtn = e.currentTarget;
            targetBtn.classList.add('active');

            currentGlowColor = targetBtn.getAttribute('data-color');
            updateLightStickColors(currentGlowColor);
        });
    });

    // Click handlers for Light Modes
    btnModes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!isPowered) return;

            btnModes.forEach(b => b.classList.remove('active'));
            const targetBtn = e.currentTarget;
            targetBtn.classList.add('active');

            currentLightMode = targetBtn.getAttribute('data-mode');
            applyModeState(currentLightMode);
        });
    });


    /* ==========================================================================
       7. LIGHT STICK DYNAMIC VIEWBOX ZOOM & CAMERA ROTATION
       ========================================================================== */
    detailBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            const targetView = e.currentTarget.getAttribute('data-view');

            // Visual feedback on selected view box
            detailBoxes.forEach(b => {
                b.style.borderColor = 'rgba(248, 247, 244, 0.1)';
                b.style.background = 'rgba(248, 247, 244, 0.03)';
            });
            e.currentTarget.style.borderColor = 'var(--yellow)';
            e.currentTarget.style.background = 'rgba(245, 208, 64, 0.08)';

            if (targetView === 'front') {
                // Default View
                lsSvg.setAttribute('viewBox', '0 0 400 600');
                if (svgPowerBtn) svgPowerBtn.style.opacity = '1';
                if (lsInnerCore) lsInnerCore.style.opacity = '1';
                
            } else if (targetView === 'back') {
                // Back View - Hide power button and slide inner core rotation
                lsSvg.setAttribute('viewBox', '0 0 400 600');
                if (svgPowerBtn) svgPowerBtn.style.opacity = '0'; // Hide power button for back view
                if (lsInnerCore) lsInnerCore.style.opacity = '0.75'; // Show silhouette

            } else if (targetView === 'globe') {
                // Zoom-in to glass globe detail view
                // Globe is centered at 200, 200 with radius 115
                // Centering viewport around it (X: 85 to 315, Y: 85 to 315)
                lsSvg.setAttribute('viewBox', '70 70 260 260');
            }
        });
    });

    // Initial state: turned OFF
    setPowerState(false);
});
