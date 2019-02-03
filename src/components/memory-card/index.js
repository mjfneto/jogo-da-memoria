const createMemoryCard = card => {
  const {src, alt, nameClass} = card;

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