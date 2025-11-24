document.querySelectorAll('.articles article').forEach(article => {
  article.addEventListener('click', () => {
    alert('Tu vas lire l’article !');
  });
});
