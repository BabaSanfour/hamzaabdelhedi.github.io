document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-spotlight]').forEach((spotlight) => {
    const items = [...spotlight.querySelectorAll('.c-spotlight__item')];
    const controls = spotlight.querySelector('.c-spotlight__controls');
    if (items.length < 2 || !controls) return;

    const slides = spotlight.querySelector('.c-spotlight__slides');
    const dots = [...spotlight.querySelectorAll('.c-spotlight__dot')];
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let current = 0;
    let paused = motion.matches;
    let hovered = false;
    let timer;

    function show(index) {
      current = (index + items.length) % items.length;
      items.forEach((item, i) => {
        item.classList.toggle('is-active', i === current);
        item.inert = i !== current;
        item.setAttribute('aria-hidden', String(i !== current));
      });
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === current)));
    }

    function syncRotation() {
      window.clearInterval(timer);
      slides.setAttribute('aria-live', paused ? 'polite' : 'off');
      if (!paused && !hovered && !document.hidden) {
        timer = window.setInterval(() => show(current + 1), 10000);
      }
    }

    function pause() {
      paused = true;
      syncRotation();
    }

    spotlight.querySelectorAll('[data-step]').forEach((button) => {
      button.addEventListener('click', () => {
        pause();
        show(current + Number(button.dataset.step));
      });
    });
    dots.forEach((dot) => dot.addEventListener('click', () => {
      pause();
      show(Number(dot.dataset.index));
    }));
    spotlight.addEventListener('mouseenter', () => { hovered = true; syncRotation(); });
    spotlight.addEventListener('mouseleave', () => { hovered = false; syncRotation(); });
    // Interaction keeps rotation paused for the remainder of this page visit.
    spotlight.addEventListener('focusin', pause);
    document.addEventListener('visibilitychange', syncRotation);
    motion.addEventListener('change', () => { if (motion.matches) pause(); });

    show(0);
    spotlight.classList.add('is-enhanced');
    controls.hidden = false;
    syncRotation();
  });
});
