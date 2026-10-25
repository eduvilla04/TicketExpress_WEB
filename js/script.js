
'use strict';

const menuButton = document.querySelector('#menu-button');
const menu = document.querySelector('#site-menu');
const searchButton = document.querySelector('#search-button');
const searchPanel = document.querySelector('#search-panel');
const searchInput = document.querySelector('#event-search');
const clearSearchButton = document.querySelector('#clear-search');
const citySelect = document.querySelector('#city-select');
const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.event-card')];
const showAllButton = document.querySelector('#show-all');
const eventsHeading = document.querySelector('#events-heading');
const emptyState = document.querySelector('#empty-state');
const resultsCount = document.querySelector('#results-count');

const EXPLORAR_HABILITADO = false;

let activeCategory = 'Todos';

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function filterEvents() {
  const term = normalize(searchInput.value.trim());
  const city = citySelect.value;
  let visible = 0;

  cards.forEach(card => {
    const categoryMatches = activeCategory === 'Todos' || card.dataset.category === activeCategory;
    const cityMatches = city === 'Todo El Salvador' || card.dataset.city === city || (city === 'San Salvador' && card.dataset.city === 'Santa Tecla');
    const termMatches = !term || normalize(card.textContent).includes(term);
    const shouldShow = categoryMatches && cityMatches && termMatches;

    card.classList.toggle('is-hidden', !shouldShow);
    if (shouldShow) visible++;
  });

  showAllButton.textContent = activeCategory === 'Todos' ? 'Todos los eventos' : activeCategory;
  emptyState.hidden = visible > 0;
  resultsCount.textContent = `${visible} evento${visible === 1 ? '' : 's'} encontrado${visible === 1 ? '' : 's'}.`;
  eventsHeading.setAttribute('aria-label', `${visible} eventos: ${activeCategory}`);
}

function setCategory(category) {
  activeCategory = category;

  filters.forEach(button => {
    const selected = button.dataset.filter === category;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  filterEvents();
}

filters.forEach(button => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => setCategory(button.dataset.filter));
});

showAllButton.addEventListener('click', () => {
  searchInput.value = '';
  citySelect.value = 'San Salvador';
  setCategory('Todos');
});

searchInput.addEventListener('input', filterEvents);
citySelect.addEventListener('change', filterEvents);

document.querySelector('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  filterEvents();
  document.querySelector('#events-heading').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

clearSearchButton.addEventListener('click', () => {
  searchInput.value = '';
  filterEvents();
  searchInput.focus();
});

function setPanel(button, panel, expanded) {
  panel.hidden = !expanded;
  button.setAttribute('aria-expanded', String(expanded));
}

menuButton.addEventListener('click', () => {
  setPanel(menuButton, menu, menu.hidden);
  setPanel(searchButton, searchPanel, false);
});

searchButton.addEventListener('click', () => {
  const opening = searchPanel.hidden;
  setPanel(searchButton, searchPanel, opening);
  setPanel(menuButton, menu, false);

  if (opening) searchInput.focus();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setPanel(menuButton, menu, false);
    setPanel(searchButton, searchPanel, false);
  }
});

document.addEventListener('click', event => {
  if (!menu.hidden && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    setPanel(menuButton, menu, false);
  }
});

if (!EXPLORAR_HABILITADO) {
  document.querySelectorAll('a[href^="explorar.html"]').forEach(link => {
    link.setAttribute('aria-disabled', 'true');
    link.addEventListener('click', event => event.preventDefault());
  });
}

citySelect.value = 'San Salvador';
filterEvents();
