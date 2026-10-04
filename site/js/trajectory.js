document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.compact-path').forEach((path) => {
    const entries = [...path.querySelectorAll('.compact-path__entry')];
    const hover = window.matchMedia('(min-width: 1025px) and (hover: hover) and (pointer: fine)');
    let pinned = null;
    const dismissed = new Set();

    function closeAll() {
      entries.forEach((entry) => { entry.open = false; });
      pinned = null;
    }

    function open(entry) {
      entries.forEach((other) => { if (other !== entry) other.open = false; });
      if (pinned !== entry) pinned = null;
      entry.open = true;
    }

    entries.forEach((entry) => {
      const trigger = entry.querySelector('summary');
      entry.addEventListener('pointerenter', () => {
        if (hover.matches && !dismissed.has(entry)) open(entry);
      });
      entry.addEventListener('pointerleave', () => {
        dismissed.delete(entry);
        if (pinned !== entry) entry.open = false;
      });
      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        if (pinned === entry) {
          closeAll();
          if (entry.matches(':hover')) dismissed.add(entry);
        } else {
          open(entry);
          pinned = entry;
        }
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      entries.filter((entry) => entry.open && entry.matches(':hover')).forEach((entry) => dismissed.add(entry));
      closeAll();
    });
    document.addEventListener('pointerdown', (event) => {
      if (!path.contains(event.target)) closeAll();
    });
    hover.addEventListener('change', () => { if (!hover.matches && !pinned) closeAll(); });
    path.classList.add('is-enhanced');
  });
});
