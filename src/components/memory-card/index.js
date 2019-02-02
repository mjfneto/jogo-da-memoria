const createMemoryCard = card => {
  const nameClass = card.nameClass;
  const src = card.src;
  const alt = card.alt;

  return `
  <article class="memory-card ${nameClass}">
    <img
      src="${src}"
      alt="${alt}"
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;
}

const handleClick = () => console.log("ae");