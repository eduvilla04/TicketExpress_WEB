function filterEvents() {
  const query = normalize(searchInput.value);
  const category = normalize(activeCategory);
  const city = citySelect.value;

  let visible = 0;

  for (const card of cards) {
    const name = normalize(card.dataset.name);
    const cardCategory = normalize(card.dataset.category);
    const cardCity = normalize(card.dataset.city);

    const matchesText = [
      name,
      cardCategory,
      cardCity
    ].some(value => value.includes(query));

    const matchesCategory =
      category === "todos" ||
      cardCategory === category;

    const matchesCity =
      city === "Todo El Salvador" ||
      card.dataset.city === city;

    const matches =
      matchesText &&
      matchesCategory &&
      matchesCity;

    card.hidden = !matches;

    if (matches) visible++;
  }

  if (emptyState) {
    emptyState.hidden = visible !== 0;
  }
}