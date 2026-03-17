document.addEventListener('DOMContentLoaded', () => {
    const spotlight = document.getElementById('spotlight-card');
    if (!spotlight) return;

    const items = spotlight.querySelectorAll('.c-spotlight__item');
    const dots = spotlight.querySelectorAll('.c-spotlight__dot');
    const prevBtn = spotlight.querySelector('.c-spotlight__btn.prev');
    const nextBtn = spotlight.querySelector('.c-spotlight__btn.next');

    let currentIndex = 0;
    let intervalId = null;
    const rotationDelay = 10000;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function showItem(index) {
        items.forEach(item => item.classList.remove('is-active'));
        dots.forEach(dot => dot.classList.remove('is-active'));

        currentIndex = (index + items.length) % items.length;
        items[currentIndex].classList.add('is-active');
        dots[currentIndex].classList.add('is-active');
    }

    function nextItem() {
        showItem(currentIndex + 1);
    }

    function prevItem() {
        showItem(currentIndex - 1);
    }

    function startRotation() {
        if (prefersReducedMotion) return;
        stopRotation();
        intervalId = setInterval(nextItem, rotationDelay);
    }

    function stopRotation() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Event Listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevItem();
        stopRotation();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextItem();
        stopRotation();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showItem(parseInt(dot.dataset.index));
            stopRotation();
        });
    });

    // Pause on hover/focus
    spotlight.addEventListener('mouseenter', stopRotation);
    spotlight.addEventListener('mouseleave', startRotation);
    spotlight.addEventListener('focusin', stopRotation);
    spotlight.addEventListener('focusout', startRotation);

    // Live GitHub Stars
    async function fetchStars() {
        const repoLinks = spotlight.querySelectorAll('[data-repo]');
        for (const link of repoLinks) {
            const repo = link.getAttribute('data-repo');
            if (!repo) continue;

            const starCountEl = link.closest('.c-spotlight__repo-item')?.querySelector('.c-spotlight__star-count');
            if (!starCountEl) continue;

            try {
                const response = await fetch(`https://api.github.com/repos/${repo}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data.stargazers_count !== undefined) {
                        starCountEl.textContent = data.stargazers_count;
                        starCountEl.classList.add('is-updated');
                    }
                }
            } catch (error) {
                console.error(`Error fetching stars for ${repo}:`, error);
            }
        }
    }

    // Initialize
    fetchStars();
    startRotation();
});
