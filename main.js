/* ==========================================================================
   ONDÉ OFFICIAL WEBSITE — INTERACTIVE LOGIC
   Includes: Intro, Mobile Menu, Scroll Spy, Reveal Animations,
             Sparkle Particles, Audio Mutual Exclusion,
             Light Stick Controller, i18n Language Switcher
   ========================================================================== */

/* ==========================================================================
   I18N — LANGUAGE TRANSLATIONS
   ========================================================================== */
const translations = {
    en: {
        nav_home:        'HOME',
        nav_about:       'ABOUT',
        nav_members:     'MEMBERS',
        nav_discography: 'DISCOGRAPHY',
        nav_goods:       'GOODS',
        slogan:          '"Three emotions, one harmony, our youth."',
        about_title:     'ABOUT ONDÉ',
        about_concept:   'A 3-member K-POP girl group where three members—each symbolizing a distinct core emotion—unite in one current. Their distinct voices blend to form a single harmonic wave, capturing the raw, beautiful, and turbulent moments of youth.',
        members_title:   'MEMBERS',
        minha_desc:      'Passionate and responsible. She quietly leads the team with warmth and dedication. Known for her powerful, clear vocals.',
        yoon_desc:       'Curious and composed. The anchor of the team. On stage, she gives everything she has. Known for her husky mid-low tone voice.',
        ina_desc:        'Quiet but deeply sensitive. She expresses her emotions through her own lyrics. Known for her energetic, dynamic dance style.',
        disco_title:     'DISCOGRAPHY',
        album_type:      '1st Single Album',
        album_concept:   '"The light that remains after a hard day ends — a message that even after the most difficult moments, a small light stays within us."',
        track1_desc:     '"Three people who felt insufficient and anxious discover each other and reclaim their confidence."',
        track2_desc:     '"A late-night song expressing loneliness and anxiety felt when alone."',
        track3_desc:     '"A bright fan song promising to always be each other\'s strength."',
        goods_title:     'OFFICIAL GOODS',
        product_name:    'ONDÉ OFFICIAL LIGHT STICK',
        product_desc:    'The ONDÉ Official Light Stick features a beautiful transparent globe containing three swirling neon streams representing Coral Red, Deep Navy, and Lemon Yellow. The swirling tracks symbolize the members\' distinct emotions merging together in a unified wave current.',
    },
    ko: {
        nav_home:        '홈',
        nav_about:       '어바웃',
        nav_members:     '멤버',
        nav_discography: '디스코그래피',
        nav_goods:       '굿즈',
        slogan:          '"세 개의 감정, 하나의 하모니, 우리의 청춘"',
        about_title:     'ONDÉ 소개',
        about_concept:   '서로 다른 감정을 상징하는 세 멤버가 하나의 하모니를 이루며, 청춘의 다양한 순간을 노래하는 3인조 K-POP 걸그룹',
        members_title:   '멤버',
        minha_desc:      '열정적이고 책임감이 강한 멤버. 보이지 않는 곳에서도 언제나 노력하며 팀을 이끌어가는 리더. 힘 있고 맑은 보컬이 특징.',
        yoon_desc:       '호기심이 많고 차분한 성격. 무대에서는 누구보다 열정적이며 팀의 중심을 잡아주는 멤버. 중저음의 허스키한 목소리가 매력.',
        ina_desc:        '조용하지만 감수성이 풍부한 막내. 솔직한 가사로 감정을 표현하는 작사 담당 멤버. 통통 튀고 파워 넘치는 춤선이 특징.',
        disco_title:     '디스코그래피',
        album_type:      '1st 싱글 앨범',
        album_concept:   '"힘든 하루가 끝난 뒤에도 우리 안에는 작은 빛이 남아 있다는 메시지"',
        track1_desc:     '"부족하고 불안하다고 느끼던 세 사람이 서로를 만나 자신감을 되찾는 이야기"',
        track2_desc:     '"늦은 밤 혼자 느끼는 외로움과 불안을 표현한 감성적인 곡"',
        track3_desc:     '"서로에게 힘이 되어주겠다는 밝은 팬송"',
        goods_title:     '공식 굿즈',
        product_name:    'ONDÉ 공식 응원봉',
        product_desc:    '세 멤버의 감정을 상징하는 코랄 레드, 딥 네이비, 레몬 옐로우가 하나로 흐르는 ONDÉ 공식 응원봉',
    },
    ja: {
        nav_home:        'ホーム',
        nav_about:       'アバウト',
        nav_members:     'メンバー',
        nav_discography: 'ディスコグラフィー',
        nav_goods:       'グッズ',
        slogan:          '"三つの感情、一つのハーモニー、私たちの青春"',
        about_title:     'ONDÉについて',
        about_concept:   'それぞれ異なる感情を象徴する3人のメンバーが一つのハーモニーを奏で、青春のさまざまな瞬間を歌う3人組K-POPガールグループ',
        members_title:   'メンバー',
        minha_desc:      '情熱的で責任感が強いリーダー。見えないところでも常に努力し、チームを引っ張っていく存在。力強く澄んだボーカルが魅力。',
        yoon_desc:       '好奇心旺盛で落ち着いた性格。ステージでは誰よりも情熱的で、チームの中心を担うメンバー。低めのハスキーな声が魅力。',
        ina_desc:        '静かだが感受性豊かな末っ子メンバー。正直な歌詞で感情を表現する作詞担当。弾けるようなパワフルなダンスが特徴。',
        disco_title:     'ディスコグラフィー',
        album_type:      '1stシングルアルバム',
        album_concept:   '"辛い一日が終わっても、私たちの中には小さな光が残っているというメッセージ"',
        track1_desc:     '"自分が足りないと感じていた3人が出会い、自信を取り戻していく物語"',
        track2_desc:     '"深夜に一人で感じる孤独と不安を表現した感性的な曲"',
        track3_desc:     '"互いに力になろうという明るいファンソング"',
        goods_title:     '公式グッズ',
        product_name:    'ONDÉ 公式ペンライト',
        product_desc:    '3人の感情を象徴するコーラルレッド、ディープネイビー、レモンイエローが一つに流れるONDÉ公式ペンライト',
    },
};

/* ==========================================================================
   LANGUAGE SWITCHER
   ========================================================================== */
let currentLang = localStorage.getItem('onde-lang') || 'en';

function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('onde-lang', lang);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Update all lang button active states (both desktop and mobile)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);
}

function initLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.getAttribute('data-lang'));
        });
    });
}


/* ==========================================================================
   DOCUMENT READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    /* ---------------------------------------------------------------------- */
    /* 1. LANGUAGE — Init buttons and apply saved/default language             */
    /* ---------------------------------------------------------------------- */
    initLangButtons();
    applyLanguage(currentLang);


    /* ---------------------------------------------------------------------- */
    /* 2. INTRO ANIMATION SCREEN                                               */
    /* ---------------------------------------------------------------------- */
    const introScreen = document.getElementById('intro-screen');
    const animateOnLoadEls = document.querySelectorAll('.animate-on-load');

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        if (introScreen) {
            introScreen.classList.add('fade-out');
            document.body.style.overflow = '';

            setTimeout(() => {
                animateOnLoadEls.forEach(el => el.classList.add('loaded'));
                introScreen.style.display = 'none';
            }, 900);
        }
    }, 3200);


    /* ---------------------------------------------------------------------- */
    /* 3. SPARKLE / CONFETTI PARTICLES on HOME                                 */
    /* ---------------------------------------------------------------------- */
    const sparkleContainer = document.getElementById('sparkle-container');
    const sparkleEmojis = ['⭐', '💗', '✨', '💕', '🌸', '💫'];

    if (sparkleContainer) {
        for (let i = 0; i < 22; i++) {
            const el = document.createElement('div');
            el.className = 'sparkle-particle';
            el.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
            el.style.left = (Math.random() * 100) + '%';
            const dur = (5 + Math.random() * 8).toFixed(2);
            const delay = (Math.random() * 8).toFixed(2);
            el.style.animationDuration = dur + 's';
            el.style.animationDelay = delay + 's';
            sparkleContainer.appendChild(el);
        }
    }


    /* ---------------------------------------------------------------------- */
    /* 4. MOBILE MENU                                                           */
    /* ---------------------------------------------------------------------- */
    const mobileMenuBtn     = document.getElementById('mobile-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavItems    = document.querySelectorAll('.mobile-nav-item');

    const toggleMobileMenu = () => {
        const isOpen = mobileMenuOverlay.classList.toggle('open');
        mobileMenuBtn.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        mobileNavItems.forEach(item => item.addEventListener('click', toggleMobileMenu));
    }


    /* ---------------------------------------------------------------------- */
    /* 5. STICKY NAV & SCROLL SPY                                              */
    /* ---------------------------------------------------------------------- */
    const headerNav = document.querySelector('.header-nav');
    const navItems  = document.querySelectorAll('.nav-item');
    const sections  = document.querySelectorAll('section');

    const handleScroll = () => {
        headerNav.classList.toggle('scrolled', window.scrollY > 50);

        let current = '';
        sections.forEach(sec => {
            if (window.scrollY >= sec.offsetTop - 130) {
                current = sec.getAttribute('id');
            }
        });

        if (current) {
            navItems.forEach(item => {
                item.classList.toggle('active', item.getAttribute('href') === `#${current}`);
            });
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });


    /* ---------------------------------------------------------------------- */
    /* 6. INTERSECTION OBSERVER — scroll reveal                                */
    /* ---------------------------------------------------------------------- */
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));


    /* ---------------------------------------------------------------------- */
    /* 7. AUDIO MUTUAL EXCLUSION                                               */
    /* ---------------------------------------------------------------------- */
    const audioPlayers = document.querySelectorAll('.custom-audio-player');
    audioPlayers.forEach(player => {
        player.addEventListener('play', () => {
            audioPlayers.forEach(other => { if (other !== player) other.pause(); });
        });
    });


    /* ---------------------------------------------------------------------- */
    /* 8. INTERACTIVE LIGHT STICK CONTROLLER                                   */
    /* ---------------------------------------------------------------------- */
    const lsSvg        = document.getElementById('lightstick-svg');
    const lsAmbient    = document.getElementById('ls-glow-ambient');
    const btnPower     = document.getElementById('btn-ls-power');
    const btnColors    = document.querySelectorAll('.btn-color');
    const btnModes     = document.querySelectorAll('.btn-mode');
    const detailBoxes  = document.querySelectorAll('.clickable-view');
    const svgPowerBtn  = document.getElementById('svg-power-btn');
    const lsInnerCore  = document.getElementById('ls-inner-core');
    const glowInner    = document.getElementById('glow-stop-inner');
    const glowMid      = document.getElementById('glow-stop-mid');
    const glowOuter    = document.getElementById('glow-stop-outer');
    const lightGlow    = document.getElementById('ls-light-glow');

    let isPowered = false;
    let currentColor = 'harmony';
    let currentMode  = 'steady';

    const colorThemes = {
        harmony: {
            inner: '#ffffff', mid: '#FF85B3', outer: 'rgba(133,212,255,0)',
            ambient: 'radial-gradient(circle, rgba(255,133,179,0.4) 0%, rgba(133,212,255,0.2) 50%, rgba(255,229,102,0.1) 100%)',
        },
        coral: {
            inner: '#ffffff', mid: '#E85C4A', outer: 'rgba(232,92,74,0)',
            ambient: 'radial-gradient(circle, rgba(232,92,74,0.55) 0%, rgba(232,92,74,0.1) 60%, transparent 100%)',
        },
        blue: {
            inner: '#ffffff', mid: '#1B2F6E', outer: 'rgba(27,47,110,0)',
            ambient: 'radial-gradient(circle, rgba(27,47,110,0.6) 0%, rgba(27,47,110,0.15) 60%, transparent 100%)',
        },
        yellow: {
            inner: '#ffffff', mid: '#F5D040', outer: 'rgba(245,208,64,0)',
            ambient: 'radial-gradient(circle, rgba(245,208,64,0.55) 0%, rgba(245,208,64,0.1) 60%, transparent 100%)',
        },
    };

    const applyColors = (key) => {
        const t = colorThemes[key] || colorThemes.harmony;
        if (glowInner)  glowInner.setAttribute('stop-color', t.inner);
        if (glowMid)    glowMid.setAttribute('stop-color', t.mid);
        if (glowOuter)  glowOuter.setAttribute('stop-color', t.outer);
        if (lsAmbient)  lsAmbient.style.background = t.ambient;
    };

    const applyMode = (mode) => {
        currentMode = mode;
        if (!isPowered) return;
        lsSvg.classList.remove('ls-mode-steady', 'ls-mode-flow', 'ls-mode-strobe');
        lsSvg.classList.add(`ls-mode-${mode}`);
    };

    const setPower = (state) => {
        isPowered = state;
        if (isPowered) {
            btnPower.classList.add('on');
            btnPower.innerHTML = '<i class="fa-solid fa-power-off"></i> ON';
            lsSvg.classList.add('ls-powered');
            btnColors.forEach(b => b.removeAttribute('disabled'));
            btnModes.forEach(b => b.removeAttribute('disabled'));
            if (lsAmbient) lsAmbient.style.opacity = '1';
            if (lightGlow) lightGlow.setAttribute('opacity', '0.8');
            applyColors(currentColor);
            applyMode(currentMode);
        } else {
            btnPower.classList.remove('on');
            btnPower.innerHTML = '<i class="fa-solid fa-power-off"></i> OFF';
            lsSvg.classList.remove('ls-powered', 'ls-mode-steady', 'ls-mode-flow', 'ls-mode-strobe');
            btnColors.forEach(b => b.setAttribute('disabled', 'true'));
            btnModes.forEach(b => b.setAttribute('disabled', 'true'));
            if (lsAmbient) lsAmbient.style.opacity = '0';
            if (lightGlow) lightGlow.setAttribute('opacity', '0');
        }
    };

    if (btnPower)    btnPower.addEventListener('click',    () => setPower(!isPowered));
    if (svgPowerBtn) svgPowerBtn.addEventListener('click', () => setPower(!isPowered));

    btnColors.forEach(btn => btn.addEventListener('click', () => {
        if (!isPowered) return;
        btnColors.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentColor = btn.getAttribute('data-color');
        applyColors(currentColor);
    }));

    btnModes.forEach(btn => btn.addEventListener('click', () => {
        if (!isPowered) return;
        btnModes.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyMode(btn.getAttribute('data-mode'));
    }));

    /* Detail view zoom controls */
    detailBoxes.forEach(box => {
        box.addEventListener('click', () => {
            detailBoxes.forEach(b => {
                b.style.borderColor = '';
                b.style.background  = '';
            });
            box.style.borderColor = 'var(--pink-hot)';
            box.style.background  = 'rgba(255,20,147,0.08)';

            const view = box.getAttribute('data-view');
            if (view === 'globe') {
                lsSvg.setAttribute('viewBox', '70 70 260 260');
            } else if (view === 'back') {
                lsSvg.setAttribute('viewBox', '0 0 400 600');
                if (svgPowerBtn) svgPowerBtn.style.opacity = '0';
                if (lsInnerCore) lsInnerCore.style.opacity = '0.7';
            } else {
                lsSvg.setAttribute('viewBox', '0 0 400 600');
                if (svgPowerBtn) svgPowerBtn.style.opacity = '1';
                if (lsInnerCore) lsInnerCore.style.opacity = '1';
            }
        });
    });

    // Initialize power off state
    setPower(false);
});
