function openLinkedStory() {
  const id = location.hash.slice(1);
  const card = document.getElementById(id);
  if (!card || !card.classList.contains('work-card')) return;
  card.querySelector('details').open = true;
  requestAnimationFrame(() => card.scrollIntoView({block: 'start'}));
}
window.addEventListener('hashchange', openLinkedStory);
openLinkedStory();

