/* ---------- Mobile Nav Toggle ---------- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.textContent = '☰';
  });
});

/* ---------- Navbar Scroll Effect ---------- */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

/* ---------- Fade-in on Scroll ---------- */
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

/* ---------- Smooth Active Link Highlighting ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinkEls.forEach((link) => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--accent)';
    }
  });
});

/* ---------- Animated Stat Counters ---------- */
const animateCounter = (el, target) => {
  const isPercent = String(target).includes('%');
  const numericTarget = parseInt(target);
  const duration = 1500;
  const startTime = performance.now();

  const update = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * numericTarget);
    el.textContent = `${value}${isPercent ? '%' : ''}`;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.dataset.target;
        animateCounter(el, target);
        statObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number[data-target]').forEach((el) => statObserver.observe(el));

/* ---------- Console Signature ---------- */
console.log(
  '%c Samuel Kofi Agyei-Tuffour ',
  'background: linear-gradient(135deg, #00d4ff, #7c3aed); color: #0a0e1a; font-weight: 800; padding: 8px 16px; border-radius: 4px; font-size: 14px;'
);
console.log(
  '%cSecOps Engineer | Zero Trust Architect | IAM Automation',
  'color: #00d4ff; font-size: 12px; margin-top: 4px;'
);
console.log('%cLooking to harden your cloud identity stack? Let''s connect.', 'color: #9ca3af; font-size: 11px;');
