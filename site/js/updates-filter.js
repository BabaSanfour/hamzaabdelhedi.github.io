(function () {
    'use strict';

    const searchInput = document.getElementById('update-search');
    const categoryBtns = Array.from(document.querySelectorAll('.js-category-filter'));
    const yearBtns = Array.from(document.querySelectorAll('.js-year-filter'));
    const allItems = Array.from(document.querySelectorAll('.js-update-item'));
    const paginationContainer = document.getElementById('js-updates-pagination');
    const results = document.getElementById('updates-results');
    const noResults = document.getElementById('updates-no-results');

    if (!allItems.length) return;

    let activeSearch = '';
    let activeCategory = 'all';
    let activeYear = 'all';
    let currentPage = 1;
    const ITEMS_PER_PAGE = 10;
    let filteredItems = [...allItems];

    function setPressed(buttons, selected) {
        buttons.forEach((button) => {
            const isSelected = button === selected;
            button.classList.toggle('active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });
    }

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
            item.hidden = true;
        });

        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const pageItems = filteredItems.slice(startIdx, startIdx + ITEMS_PER_PAGE);

        pageItems.forEach(item => {
            item.hidden = false;
        });

        if (results) {
            results.textContent = `${filteredItems.length} update${filteredItems.length === 1 ? '' : 's'} found`;
        }
        if (noResults) noResults.hidden = filteredItems.length !== 0;
    }

    function renderPagination() {
        if (!paginationContainer) return;

        const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
        paginationContainer.replaceChildren();

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i += 1) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `c-updates-pagination__btn ${i === currentPage ? 'active' : ''}`;
            button.textContent = String(i);
            button.setAttribute('aria-label', `Show updates page ${i}`);
            if (i === currentPage) button.setAttribute('aria-current', 'page');
            button.addEventListener('click', () => {
                currentPage = i;
                renderItems();
                renderPagination();
                document.querySelector('.c-updates-filter-group')?.scrollIntoView({
                    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                    block: 'start'
                });
            });
            paginationContainer.appendChild(button);
        }
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategory = btn.getAttribute('data-filter') || 'all';
            setPressed(categoryBtns, btn);
            applyFilters();
        });
    });

    yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            activeYear = btn.getAttribute('data-year') || 'all';
            setPressed(yearBtns, btn);
            applyFilters();
        });
    });

    searchInput?.addEventListener('input', (event) => {
        activeSearch = event.target.value.toLowerCase().trim();
        applyFilters();
    });

    setPressed(categoryBtns, categoryBtns[0]);
    setPressed(yearBtns, yearBtns[0]);
    applyFilters();
}());
