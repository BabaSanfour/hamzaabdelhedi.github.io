(function () {
    const searchInput = document.getElementById('update-search');
    const categoryBtns = document.querySelectorAll('.js-category-filter');
    const yearBtns = document.querySelectorAll('.js-year-filter');
    const allItems = Array.from(document.querySelectorAll('.js-update-item'));
    const paginationContainer = document.getElementById('js-updates-pagination');

    if (!categoryBtns.length || !allItems.length) return;

    let activeSearch = '';
    let activeCategory = 'all';
    let activeYear = 'all';
    let currentPage = 1;
    const ITEMS_PER_PAGE = 10;
    let filteredItems = [...allItems];

    function applyFilters() {
        filteredItems = allItems.filter(item => {
            const textContent = item.textContent.toLowerCase();
            const matchSearch = !activeSearch || textContent.includes(activeSearch);

            const itemTags = item.getAttribute('data-tags')?.split(' ') || [];
            const itemYear = item.getAttribute('data-year');
            const matchCategory = activeCategory === 'all' || itemTags.includes(activeCategory);
            const matchYear = activeYear === 'all' || itemYear === activeYear;

            return matchSearch && matchCategory && matchYear;
        });

        currentPage = 1;
        renderItems();
        renderPagination();
    }

    function renderItems() {
        allItems.forEach(item => {
            item.style.display = 'none';
            item.style.opacity = '0';
        });

        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = startIdx + ITEMS_PER_PAGE;
        const pageItems = filteredItems.slice(startIdx, endIdx);

        pageItems.forEach((item, index) => {
            item.style.display = '';
            setTimeout(() => {
                item.style.transition = 'opacity 0.3s ease';
                item.style.opacity = '1';
            }, 10 * index);
        });
    }

    function renderPagination() {
        if (!paginationContainer) return;

        const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
        paginationContainer.innerHTML = '';

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.className = `c-updates-pagination__btn ${i === currentPage ? 'active' : ''}`;
            btn.textContent = i;
            btn.addEventListener('click', () => {
                currentPage = i;
                renderItems();
                renderPagination();
                // Scroll up smoothly so user sees the new items
                document.querySelector('.c-updates-filter-group')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            paginationContainer.appendChild(btn);
        }
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategory = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            yearBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeYear = btn.getAttribute('data-year');
            applyFilters();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeSearch = e.target.value.toLowerCase().trim();
            applyFilters();
        });
    }

    // Initialize
    applyFilters();
})();
