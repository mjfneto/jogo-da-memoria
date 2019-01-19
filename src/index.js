const $root = document.querySelector("#root");

const $iconCollab = `
    <img src='img/icon-collabcode.svg'
        alt='Gueio, mascote da CollabCode'
        class='icon'
    />
`;

const cards = [
  { name: "icon-c", alt: "Ícone de um livro sobre a linguagem C++" },
  { name: "icon-cabeca", alt: "Ícone de um livro sobre a linguagem HTML" },
  { name: "icon-celular", alt: "Ícone representativo de um smartphone" },
  { name: "icon-java", alt: "Ícone de um livro sobre a linguagem Java" },
  { name: "-icon-js", alt: "Ícone de um livro sobre a linguagem JavaScript" },
  { name: "icon-php", alt: "Ícone de um livro sobre a linguagem PHP" },
  { name: "icon-responsivo", alt: "Ícone representativo de responsividade" },
  { name: "icon-settings", alt: "Ícone representativo de configuração" },
  {
    name: "icon-woman",
    alt: "Ícone representativo de uma mulher usando um computador"
  }
];

const placeCards = function() {
  cards.forEach(function(item) {
    const $memoryCard = document.createElement("article");
    const $memoryCardFront = document.createElement("article");
    let $iconTemplate = `<img src=img/${item.name}.png alt='${
      item.alt
    }' class='icon'/>`;

    console.log($iconTemplate);

    $memoryCard.classList.add("memory-card");
    $root.insertBefore($memoryCard, null);

    $memoryCardFront.classList.add("memory-card");
    $memoryCardFront.classList.add("-front");
    $root.insertBefore($memoryCardFront, $memoryCard);

    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

    $memoryCardFront.insertAdjacentHTML("afterbegin", $iconTemplate);
  });
};

placeCards();
