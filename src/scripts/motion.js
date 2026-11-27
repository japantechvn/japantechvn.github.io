// Motion layer: scroll reveals, parallax, counters, process progress,
// cursor-follow images and magnetic buttons. Respects prefers-reduced-motion.

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const introPlaying = !root.classList.contains('no-intro') && !reduceMotion;
const START_DELAY = introPlaying ? 1150 : 0; // wait for the intro curtain to lift

// 1. Scroll reveals ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('visible');
      if (el.classList.contains('reveal-stagger')) {
        Array.from(el.children).forEach((child, idx) => {
          child.style.transitionDelay = `${idx * 110}ms`;
          child.classList.add('visible');
        });
      }
      revealObserver.unobserve(el);
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

// 2. Animated counters ────────────────────────────────────────
const animateCounter = (el) => {
  const target = Number(el.getAttribute('data-target') || 0);
  const suffix = el.getAttribute('data-suffix') || '';
  const padZero = el.getAttribute('data-pad') === 'true';
  const format = (n) => `${padZero && n < 10 ? `0${n}` : n}${suffix}`;
  if (reduceMotion) {
    el.textContent = format(target);
    return;
  }
  const duration = 1600;
  const startTime = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = format(Math.floor(eased * target));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.4 }
);

setTimeout(() => {
  document
    .querySelectorAll('.reveal, .reveal-stagger, .mask, .img-reveal, .draw-line')
    .forEach((el) => revealObserver.observe(el));
  document.querySelectorAll('.counter').forEach((el) => counterObserver.observe(el));
}, START_DELAY);

// 3. Scroll-driven effects (one rAF loop) ─────────────────────
const progressBar = document.getElementById('scroll-progress');
const parallaxEls = reduceMotion ? [] : Array.from(document.querySelectorAll('[data-parallax]'));
const processEl = document.querySelector('[data-process]');
const processSteps = processEl ? Array.from(processEl.querySelectorAll('[data-step]')) : [];

let ticking = false;
const onScrollFrame = () => {
  ticking = false;
  const vh = window.innerHeight;

  // Top progress bar
  if (progressBar) {
    const docHeight = root.scrollHeight - vh;
    progressBar.style.width = `${docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0}%`;
  }

  // Parallax: element moves relative to its container's position in the viewport
  parallaxEls.forEach((el) => {
    const box = (el.parentElement || el).getBoundingClientRect();
    if (box.bottom < -100 || box.top > vh + 100) return;
    const speed = parseFloat(el.dataset.parallax) || 0.08;
    const offset = (box.top + box.height / 2 - vh / 2) * -speed;
    el.style.translate = `0 ${offset.toFixed(1)}px`;
  });

  // Process timeline: fill line + activate passed steps
  if (processEl) {
    const r = processEl.getBoundingClientRect();
    const trigger = vh * 0.6;
    const p = Math.min(Math.max((trigger - r.top) / r.height, 0), 1);
    processEl.style.setProperty('--p', p.toFixed(3));
    processSteps.forEach((step) => {
      step.classList.toggle('is-active', reduceMotion || step.getBoundingClientRect().top < trigger);
    });
  }
};

const requestFrame = () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(onScrollFrame);
  }
};
window.addEventListener('scroll', requestFrame, { passive: true });
window.addEventListener('resize', requestFrame);
onScrollFrame();

// 4. Cursor-follow image on rows with [data-hover-img] ───────
if (finePointer && !reduceMotion) {
  const rows = document.querySelectorAll('[data-hover-img]');
  if (rows.length) {
    const box = document.createElement('div');
    box.className = 'hover-img';
    box.setAttribute('aria-hidden', 'true');
    const img = document.createElement('img');
    img.alt = '';
    box.appendChild(img);
    document.body.appendChild(box);

    // Preload so the image is ready on hover
    rows.forEach((row) => {
      const pre = new Image();
      pre.src = row.dataset.hoverImg;
    });

    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      box.style.transform = `translate3d(${cx + 32}px, ${cy - 120}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    rows.forEach((row) => {
      row.addEventListener('mouseenter', (e) => {
        img.src = row.dataset.hoverImg;
        if (!raf) {
          cx = x = e.clientX;
          cy = y = e.clientY;
          loop();
        }
        box.classList.add('show');
      });
      row.addEventListener('mousemove', (e) => {
        x = e.clientX;
        y = e.clientY;
      });
      row.addEventListener('mouseleave', () => {
        box.classList.remove('show');
        setTimeout(() => {
          if (!box.classList.contains('show')) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
        }, 400);
      });
    });
  }
}

// 5. Magnetic buttons ([data-magnetic]) ──────────────────────
if (finePointer && !reduceMotion) {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.style.transition = 'translate 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s';
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.translate = `${dx * 0.3}px ${dy * 0.3}px`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.translate = '0 0';
    });
  });
}
