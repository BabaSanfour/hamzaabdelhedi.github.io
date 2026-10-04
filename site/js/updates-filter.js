(function () {
    'use strict';

    const archive = document.querySelector('.updates-page');
    const list = archive?.querySelector('.js-updates-list');
    if (!list) return;
    const searchInput = archive.querySelector('#update-search');
    const categoryBtns = Array.from(archive.querySelectorAll('.js-category-filter'));
    const yearBtns = Array.from(archive.querySelectorAll('.js-year-filter'));
    const allItems = Array.from(list.querySelectorAll('.js-update-item'));
    const paginationContainer = archive.querySelector('#js-updates-pagination');
    const results = archive.querySelector('#updates-results');
    const noResults = archive.querySelector('#updates-no-results');

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
            const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
            results.textContent = `${filteredItems.length} update${filteredItems.length === 1 ? '' : 's'} found${totalPages > 1 ? ` — page ${currentPage} of ${totalPages}` : ''}`;
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
                // Keep focus with the newly displayed results; the next Tab
                // then reaches their first link instead of skipping the page.
                const focusTarget = results || paginationContainer.querySelector('[aria-current="page"]');
                focusTarget?.focus({ preventScroll: true });
                focusTarget?.scrollIntoView({ behavior: 'instant', block: 'start' });
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
