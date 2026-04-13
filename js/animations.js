/* ============================================
   Scroll animations — IntersectionObserver reveals
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    elements.forEach(el => observer.observe(el));
  }

  // Count-up animation
  const counters = document.querySelectorAll('[data-count-to]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.countTo, 10);
          let current = 0;
          const duration = 1500;
          const step = Math.ceil(duration / target);
          const timer = setInterval(() => {
            current++;
            el.textContent = current;
            if (current >= target) {
              clearInterval(timer);
              el.textContent = target + '+';
            }
          }, step);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

});
