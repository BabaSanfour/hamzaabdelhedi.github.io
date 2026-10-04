// Static research cards remain complete without this optional map.
document.querySelectorAll('[data-research-explorer]').forEach((explorer) => {
  const controls = explorer.querySelector('.research-explorer__controls');
  const map = explorer.querySelector('.research-map');
  const methods = [...controls.querySelectorAll('[data-method]')];
  const projects = [...map.querySelectorAll('[data-project]')];
  const cards = [...explorer.querySelectorAll('[data-research-methods]')];
  const panels = [...controls.querySelectorAll('[data-map-panel]')];
  const fields = [...map.querySelectorAll('[data-field]')];
  const edges = map.querySelector('[data-map-edges]');
  const count = explorer.querySelector('[data-research-count]');
  let selection = { type: 'method', id: 'all' };
  let connections = [];

  const projectMethods = (project) => project.dataset.projectMethods.split(' ');

  function drawConnections() {
    const bounds = map.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    edges.replaceChildren();
    connections.forEach(([start, end]) => {
      const point = (element) => {
        const rect = element.getBoundingClientRect();
        return { x: (rect.x + rect.width / 2 - bounds.x) / bounds.width * 1000,
          y: (rect.y + rect.height / 2 - bounds.y) / bounds.height * 1000 };
      };
      const a = point(start), b = point(end);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const mid = (a.y + b.y) / 2;
      path.setAttribute('d', `M ${a.x} ${a.y} C ${a.x} ${mid}, ${b.x} ${mid}, ${b.x} ${b.y}`);
      path.setAttribute('pathLength', '1');
      edges.append(path);
    });
  }

  function showSelection(type, requested, updateURL = false) {
    const project = type === 'project' && projects.find(button => button.dataset.project === requested);
    const method = type === 'method' && methods.find(button => button.dataset.method === requested);
    selection = project ? { type: 'project', id: requested } : { type: 'method', id: method ? requested : 'all' };
    const all = selection.id === 'all';
    const relatedMethods = project ? projectMethods(project) : all ? [] : [selection.id];
    const relatedProjects = project ? [project] : projects.filter(button => all || projectMethods(button).includes(selection.id));

    methods.forEach(button => {
      button.setAttribute('aria-pressed', String(selection.type === 'method' && button.dataset.method === selection.id));
      button.classList.toggle('is-connected', relatedMethods.includes(button.dataset.method));
    });
    projects.forEach(button => {
      button.setAttribute('aria-pressed', String(button === project));
      button.classList.toggle('is-connected', !all && relatedProjects.includes(button));
      button.classList.toggle('is-muted', !all && !relatedProjects.includes(button));
    });
    fields.forEach(field => field.classList.toggle('is-connected', relatedMethods.includes(field.dataset.field)));
    map.classList.toggle('has-selection', !all);
    const panel = all ? 'all' : `${selection.type}-${selection.id}`;
    panels.forEach(element => { element.hidden = element.dataset.mapPanel !== panel; });
    cards.forEach(card => {
      card.hidden = !relatedProjects.some(button => button.dataset.project === card.dataset.researchProject);
    });
    const label = all ? 'All connections' : project ? project.textContent.trim().replace(/\s+/g, ' ') : method?.textContent.trim() || 'All connections';
    count.textContent = `${label}: ${relatedProjects.length} of ${cards.length} research directions`;

    connections = [];
    relatedProjects.forEach(button => {
      projectMethods(button).forEach(id => {
        if (relatedMethods.includes(id)) connections.push([button, methods.find(item => item.dataset.method === id)]);
      });
    });
    drawConnections();
    if (updateURL) {
      const url = new URL(window.location.href);
      url.searchParams.delete('method');
      url.searchParams.delete('project');
      if (!all) url.searchParams.set(selection.type, selection.id);
      window.history.replaceState(null, '', url);
    }
  }

  function readURL() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('project')) showSelection('project', params.get('project'));
    else showSelection('method', params.get('method'));
  }

  methods.forEach(button => button.addEventListener('click', () => showSelection('method', button.dataset.method, true)));
  projects.forEach(button => button.addEventListener('click', () => showSelection('project', button.dataset.project, true)));
  controls.addEventListener('keydown', event => {
    if (event.key === 'Escape' && selection.id !== 'all') {
      showSelection('method', 'all', true);
      // A detail link can become hidden when its panel closes.
      if (document.activeElement.closest('[hidden]')) methods.find(button => button.dataset.method === 'all').focus();
    }
  });
  window.addEventListener('popstate', readURL);
  controls.hidden = false;
  explorer.querySelector('[data-map-fallback]').hidden = true;
  readURL();
  if ('ResizeObserver' in window) new ResizeObserver(drawConnections).observe(map);
  else window.addEventListener('resize', drawConnections);
});
