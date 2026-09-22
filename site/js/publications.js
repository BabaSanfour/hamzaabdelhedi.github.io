(function () {
  'use strict';

  function setPressed(buttons, selected) {
    buttons.forEach((button) => {
      const pressed = button === selected;
      button.classList.toggle('active', pressed);
      button.setAttribute('aria-pressed', String(pressed));
    });
  }

  function initPublicationFilters() {
    const page = document.querySelector('.publications-page');
    if (!page) return;

    const searchInput = page.querySelector('#pub-search');
    const typeButtons = Array.from(page.querySelectorAll('.js-type-filter'));
    const yearButtons = Array.from(page.querySelectorAll('.js-year-filter'));
    const keywordButtons = Array.from(page.querySelectorAll('.js-keyword-filter'));
    const wrappers = Array.from(page.querySelectorAll('.publication-wrapper'));
    const yearGroups = Array.from(page.querySelectorAll('.publication-year-group'));
    const noResults = page.querySelector('#no-results');
    const results = page.querySelector('#publications-results');
    const resetButton = page.querySelector('.js-publications-reset');
    const keywordToggle = page.querySelector('.js-keywords-toggle');
    const keywordContainer = page.querySelector('.js-keywords-container');

    let currentSearch = '';
    let currentType = 'all';
    let currentYear = 'all';
    let currentKeyword = 'all';

    function applyFilters() {
      let visibleCount = 0;

      wrappers.forEach((wrapper) => {
        const searchText = (wrapper.dataset.search || '').toLowerCase();
        const keywords = (wrapper.dataset.keywords || '').split(',').filter(Boolean);
        const matches = (!currentSearch || searchText.includes(currentSearch))
          && (currentType === 'all' || wrapper.dataset.type === currentType)
          && (currentYear === 'all' || wrapper.dataset.year === currentYear)
          && (currentKeyword === 'all' || keywords.includes(currentKeyword));

        wrapper.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      yearGroups.forEach((group) => {
        const hasVisibleItem = Array.from(group.querySelectorAll('.publication-wrapper'))
          .some((wrapper) => !wrapper.hidden);
        group.hidden = !hasVisibleItem;
      });

      if (noResults) noResults.hidden = visibleCount !== 0;
      if (results) {
        results.textContent = `${visibleCount} publication${visibleCount === 1 ? '' : 's'} shown`;
      }
    }

    searchInput?.addEventListener('input', (event) => {
      currentSearch = event.target.value.toLowerCase().trim();
      applyFilters();
    });

    typeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        currentType = button.dataset.filter || 'all';
        setPressed(typeButtons, button);
        applyFilters();
      });
    });

    yearButtons.forEach((button) => {
      button.addEventListener('click', () => {
        currentYear = button.dataset.year || 'all';
        setPressed(yearButtons, button);
        applyFilters();
      });
    });

    keywordButtons.forEach((button) => {
      button.addEventListener('click', () => {
        currentKeyword = button.dataset.keyword || 'all';
        setPressed(keywordButtons, button);
        applyFilters();
      });
    });

    keywordToggle?.addEventListener('click', () => {
      const isExpanded = keywordToggle.getAttribute('aria-expanded') === 'true';
      keywordContainer?.querySelectorAll('.js-keyword-filter.is-hidden').forEach((button) => {
        button.classList.toggle('is-hidden', isExpanded);
      });
      keywordToggle.setAttribute('aria-expanded', String(!isExpanded));
      keywordToggle.textContent = isExpanded ? 'More keywords' : 'Fewer keywords';
    });

    resetButton?.addEventListener('click', () => {
      currentSearch = '';
      currentType = 'all';
      currentYear = 'all';
      currentKeyword = 'all';
      if (searchInput) searchInput.value = '';
      setPressed(typeButtons, typeButtons[0]);
      setPressed(yearButtons, yearButtons[0]);
      setPressed(keywordButtons, keywordButtons[0]);
      applyFilters();
    });

    setPressed(typeButtons, typeButtons.find((button) => button.dataset.filter === 'all'));
    setPressed(yearButtons, yearButtons.find((button) => button.dataset.year === 'all'));
    setPressed(keywordButtons, keywordButtons.find((button) => button.dataset.keyword === 'all'));
    applyFilters();
  }

  function copyCitation(button) {
    const citation = button.dataset.copyBibtex;
    if (!citation) return;

    const card = button.closest('.c-publication-card');
    const status = card?.querySelector('[data-citation-status]');
    const fallback = card?.querySelector('[data-citation-fallback]');
    const announce = (message) => {
      if (status) status.textContent = message;
    };

    const showFallback = () => {
      if (fallback) {
        fallback.value = citation;
        fallback.hidden = false;
        fallback.focus();
        fallback.select();
      }
      announce('Copy failed. Select the citation below to copy it manually.');
    };

    const copyWithLegacyApi = () => {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = citation;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        textarea.remove();
        return copied;
      } catch (error) {
        return false;
      }
    };

    const clipboard = navigator.clipboard;
    if (clipboard?.writeText) {
      clipboard.writeText(citation)
        .then(() => announce('Citation copied.'))
        .catch(() => {
          if (copyWithLegacyApi()) announce('Citation copied.');
          else showFallback();
        });
    } else if (copyWithLegacyApi()) {
      announce('Citation copied.');
    } else {
      showFallback();
    }
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-copy-bibtex]');
    if (button) copyCitation(button);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublicationFilters, { once: true });
  } else {
    initPublicationFilters();
  }
}());
