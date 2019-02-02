const createMemoryCard = (nameClass = undefined, src = "icon-collabcode", alt = "Gueio, mascote da CollabCode.") => `
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