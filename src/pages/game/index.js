const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();

const cards = {
  "icon-bug": "Ícone representando um bug no código",
  "icon-c": "Ícone de um livro sobre C++",
  "icon-cabeca": "Ícone representativo da linguagem HTML",
  "icon-celular": "Ícone representativo de um dispositivo mobile",
  "icon-java": "Ícone de um livro sobre Java",
  "-icon-js": "Ícone de um livro sobre JavaScript",
  "icon-php": "Ícone de um livro sobre PHP",
  "icon-responsivo": "Ícone representando responsividade",
  "icon-settings": "Ícone representando engrenagens de um sistema",
  "icon-woman": "Ícone sobre protagonismo das mulheres em programação"
};

const sources = Object.keys(cards);

sources.forEach(function(src){
    let $memoryCard = createMemoryCard(
        "icon-collabcode",
        "Gueio, mascote da CollabCode."
    );

    let $memoryCardFront = createMemoryCard(
        src,
        cards[src],
        "-front"
    );

    $cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
    $cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

    $root.insertAdjacentElement("beforeend", $cardWrapper);
});