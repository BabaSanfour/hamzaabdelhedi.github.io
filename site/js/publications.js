(function () {
  'use strict';

  function initPublicationFilters() {
    const page = document.querySelector('.publications-page');
    if (!page) return;

    const searchInput = page.querySelector('#pub-search');
    const groups = Array.from(page.querySelectorAll('[data-filter-group]'));
    const keywordMatch = page.querySelector('#pub-keyword-match');
    const wrappers = Array.from(page.querySelectorAll('.publication-wrapper'));
    const yearGroups = Array.from(page.querySelectorAll('.publication-year-group'));
    const noResults = page.querySelector('#no-results');
    const results = page.querySelector('#publications-results');
    if (!searchInput || groups.length !== 3 || !keywordMatch) return;

    function applyFilters() {
      const search = searchInput.value.toLowerCase().trim();
      const selected = {};
      groups.forEach((group) => {
        const checked = Array.from(group.querySelectorAll('input:checked'));
        selected[group.dataset.filterGroup] = checked.map((input) => input.value);
        group.querySelector('[data-filter-summary]').textContent = checked.length > 1
          ? `${checked.length} selected`
          : checked[0]?.nextElementSibling.textContent.trim() || 'All';
      });
      let visibleCount = 0;
      wrappers.forEach((wrapper) => {
        const keywords = (wrapper.dataset.keywords || '').split(',').filter(Boolean);
        const matches = (!search || (wrapper.dataset.search || '').includes(search))
          && (!selected.type.length || selected.type.includes(wrapper.dataset.type))
          && (!selected.year.length || selected.year.includes(wrapper.dataset.year))
          && (!selected.keyword.length || (keywordMatch.value === 'all'
            ? selected.keyword.every((keyword) => keywords.includes(keyword))
            : selected.keyword.some((keyword) => keywords.includes(keyword))));
        wrapper.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      yearGroups.forEach((group) => {
        group.hidden = !Array.from(group.querySelectorAll('.publication-wrapper')).some((wrapper) => !wrapper.hidden);
      });
      if (noResults) noResults.hidden = visibleCount !== 0;
      if (results) results.textContent = `${visibleCount} of ${wrappers.length} publications shown`;
    }

    searchInput.addEventListener('input', applyFilters);
    groups.forEach((group) => {
      group.addEventListener('change', applyFilters);
      group.querySelector('[data-clear-filter]').addEventListener('click', () => {
        group.querySelectorAll('input').forEach((input) => { input.checked = false; });
        applyFilters();
      });
      group.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          group.open = false;
          group.querySelector('summary').focus();
        }
      });
    });
    page.querySelectorAll('.js-publications-reset').forEach((button) => {
      button.addEventListener('click', () => {
        searchInput.value = '';
        groups.forEach((group) => group.querySelectorAll('input').forEach((input) => { input.checked = false; }));
        keywordMatch.value = 'any';
        // The empty-state reset disappears after clearing; keep focus in view.
        if (noResults?.contains(button)) searchInput.focus();
        applyFilters();
      });
    });
    applyFilters();
    page.querySelectorAll('[data-publication-controls]').forEach((control) => { control.hidden = false; });
  }

  function copyCitation(button) {
    const citation = button.dataset.copyBibtex;
    if (!citation) return;

    const card = button.closest('[data-citation-scope]');
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
      const focused = document.activeElement;
      const textarea = document.createElement('textarea');
      try {
        textarea.value = citation;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        return document.execCommand('copy');
      } catch (error) {
        return false;
      } finally {
        textarea.remove();
        focused?.focus({ preventScroll: true });
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

  function initPublications() {
    initPublicationFilters();
    document.querySelectorAll('[data-copy-bibtex]').forEach((button) => { button.hidden = false; });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublications, { once: true });
  } else {
    initPublications();
  }
}());
