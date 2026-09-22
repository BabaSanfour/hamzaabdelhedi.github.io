document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.getElementById('spotlight-card');
    if (!spotlight) return;

    const items = Array.from(spotlight.querySelectorAll('.c-spotlight__item'));
    const dots = Array.from(spotlight.querySelectorAll('.c-spotlight__dot'));
    const prevBtn = spotlight.querySelector('.c-spotlight__btn.prev');
    const nextBtn = spotlight.querySelector('.c-spotlight__btn.next');

    if (!items.length) return;

    let currentIndex = 0;
    let intervalId = null;
    const rotationDelay = 10000;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showItem(index) {
        currentIndex = (index + items.length) % items.length;
        items.forEach((item, itemIndex) => {
            const isActive = itemIndex === currentIndex;
            item.classList.toggle('is-active', isActive);
            item.setAttribute('aria-hidden', String(!isActive));
        });
        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-pressed', String(isActive));
        });
    }

    function nextItem() {
        showItem(currentIndex + 1);
    }

    function prevItem() {
        showItem(currentIndex - 1);
    }

    function stopRotation() {
        if (intervalId) {
            window.clearInterval(intervalId);
            intervalId = null;
        }
    }

    function startRotation() {
        if (prefersReducedMotion || items.length < 2) return;
        stopRotation();
        intervalId = window.setInterval(nextItem, rotationDelay);
    }

    prevBtn?.addEventListener('click', () => {
        prevItem();
        stopRotation();
    });

    nextBtn?.addEventListener('click', () => {
        nextItem();
        stopRotation();
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            showItem(Number(dot.dataset.index));
            stopRotation();
        });
    });

    spotlight.addEventListener('mouseenter', stopRotation);
    spotlight.addEventListener('mouseleave', startRotation);
    spotlight.addEventListener('focusin', stopRotation);
    spotlight.addEventListener('focusout', (event) => {
        if (!spotlight.contains(event.relatedTarget)) startRotation();
    });

    showItem(0);
    startRotation();
});
