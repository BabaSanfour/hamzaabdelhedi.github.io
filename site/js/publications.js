// Publications View Switcher
document.addEventListener('DOMContentLoaded', function() {
  const listViewButton = document.getElementById('list-view-button');
  const postViewButton = document.getElementById('post-view-button');
  const publicationListView = document.getElementById('publication-list-view');
  const publicationPostView = document.getElementById('publication-post-view');

  // Exit if elements don't exist (not on publications page)
  if (!listViewButton || !postViewButton) return;

  function showView(view) {
    if (view === 'list') {
      publicationListView.classList.add('active');
      publicationPostView.classList.remove('active');
      listViewButton.classList.add('active');
      postViewButton.classList.remove('active');
    } else if (view === 'post') {
      publicationPostView.classList.add('active');
      publicationListView.classList.remove('active');
      postViewButton.classList.add('active');
      listViewButton.classList.remove('active');
    }
  }

  // Set default view (list view)
  showView('list');

  listViewButton.addEventListener('click', function() {
    showView('list');
  });

  postViewButton.addEventListener('click', function() {
    showView('post');
  });
});
