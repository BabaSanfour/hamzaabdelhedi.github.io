/* Optional entrances: content is always visible, including without JavaScript. */
(() => {
  const page = document.querySelector('.about-page');
  const motion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  if (!page || !motion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('about-page__entered');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  page.querySelectorAll('.profile-page__content > section').forEach(section => observer.observe(section));
  motion.addEventListener('change', event => {
    if (!event.matches) observer.disconnect();
  });
})();
