(function () {
  'use strict';
  const archive = document.querySelector('.updates-page');
  const form = archive?.querySelector('[data-news-controls]');
  if (!form) return;
  const search = form.querySelector('#update-search');
  const category = form.querySelector('#update-category');
  const year = form.querySelector('#update-year');
  const items = Array.from(archive.querySelectorAll('[data-news-item]'));
  const groups = Array.from(archive.querySelectorAll('[data-news-year]'));
  const results = archive.querySelector('#updates-results');
  const empty = archive.querySelector('#updates-no-results');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = new Map(items.map(item => [item, normalize(item.textContent + ' ' + item.dataset.topics)]));
  function readLocation() {
    const params = new URLSearchParams(location.search);
    search.value = params.get('q') || '';
    for (const [control, key] of [[category, 'category'], [year, 'year']]) {
      const value = params.get(key) || 'all';
      control.value = Array.from(control.options).some(option => option.value === value) ? value : 'all';
    }
    // An explicit record link should never land on a hidden result.
    let anchor;
    try { anchor = decodeURIComponent(location.hash.slice(1)); } catch (_) { anchor = ''; }
    if (items.some(item => item.id === anchor)) { search.value = ''; category.value = year.value = 'all'; }
  }
  function render(syncURL) {
    const words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    let count = 0;
    items.forEach(item => {
      item.hidden = !(words.every(word => searchable.get(item).includes(word)) &&
        (category.value === 'all' || item.dataset.category === category.value || JSON.parse(item.dataset.categories || '[]').includes(category.value)) &&
        (year.value === 'all' || item.dataset.year === year.value));
      if (!item.hidden) count += 1;
    });
    groups.forEach(group => { group.hidden = !Array.from(group.querySelectorAll('[data-news-item]')).some(item => !item.hidden); });
    results.textContent = `${count} update${count === 1 ? '' : 's'}${words.length || category.value !== 'all' || year.value !== 'all' ? ' found' : ''}`;
    empty.hidden = count !== 0;
    if (syncURL) {
      const url = new URL(location.href);
      for (const [key, value] of [['q', search.value.trim()], ['category', category.value], ['year', year.value]]) {
        if (value && value !== 'all') url.searchParams.set(key, value); else url.searchParams.delete(key);
      }
      url.hash = '';
      history.replaceState(null, '', url);
    }
  }
  form.hidden = false;
  readLocation(); render(false);
  form.addEventListener('submit', event => event.preventDefault());
  search.addEventListener('input', () => render(true));
  category.addEventListener('change', () => render(true));
  year.addEventListener('change', () => render(true));
  form.addEventListener('reset', event => { event.preventDefault(); search.value = ''; category.value = year.value = 'all'; render(true); });
  window.addEventListener('popstate', () => { readLocation(); render(false); });
  window.addEventListener('hashchange', () => { readLocation(); render(false); });
}());
