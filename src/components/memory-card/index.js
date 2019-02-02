const createMemoryCard = (
  variation = "",
  source = "icon-collabcode.png",
  alternative = "Gueio, mascote da CollabCode.") => {

    const $memoryCard = `
      <article class="memory-card${" " + variation}">
        <img src='img/${source}'
            alt=${alternative}
            class='icon'
            onClick="handleClick()"
        />
      </article>
    `;

  return $memoryCard;
}

function handleClick() {
  console.log("ae");
}