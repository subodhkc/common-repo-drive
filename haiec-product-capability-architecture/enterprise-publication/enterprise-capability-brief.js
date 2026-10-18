
/* ═══════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════ */
const slides = Array.from(document.querySelectorAll('.slide'));
const navRail = document.getElementById('nav-rail');
const pageCounter = document.getElementById('page-counter');

slides.forEach((slide, i) => {
  const dot = document.createElement('button');
  dot.className = 'nav-dot' + (i === 0 ? ' active' : '');
  dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
  dot.addEventListener('click', () => slide.scrollIntoView({behavior: 'smooth'}));
  navRail.appendChild(dot);
});

const dots = Array.from(navRail.querySelectorAll('.nav-dot'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      const index = slides.indexOf(entry.target);
      if (index >= 0) {
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        pageCounter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      }
    }
  });
}, { threshold: [0.5, 0.6, 0.7] });

slides.forEach(s => observer.observe(s));

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault();
    const current = slides.findIndex(s => s.getBoundingClientRect().top > -100 && s.getBoundingClientRect().top < window.innerHeight / 2);
    const next = Math.min(current + 1, slides.length - 1);
    slides[next].scrollIntoView({behavior: 'smooth'});
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    const current = slides.findIndex(s => s.getBoundingClientRect().top > -100 && s.getBoundingClientRect().top < window.innerHeight / 2);
    const prev = Math.max(current - 1, 0);
    slides[prev].scrollIntoView({behavior: 'smooth'});
  }
});
