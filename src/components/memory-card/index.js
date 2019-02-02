const createMemoryCard = (src, alt, nameClass) => `
  <article class="memory-card ${nameClass}">
    <img
      src="img/${src}.png"
      alt="${alt}."
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log("ae");