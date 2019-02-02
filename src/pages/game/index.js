const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();

const $memoryCard = createMemoryCard(
    "",
    "img/icon-collabcode.png",
    "Gueio, mascote da CollabCode"
    );

const $memoryCardC = createMemoryCard(
    "-front",
    "img/icon-c.png",
    "Ícone de um livro da linguagem C++"
    );

const $memoryCardJS = createMemoryCard(
    "-front",
    "img/icon-js.png",
    "Ícone de um livro da linguagem JavaScript"
);

const $memoryCardJava = createMemoryCard(
  "-front",
  "img/icon-java.png",
  "Ícone de um livro da linguagem Java"
);

const $memoryCardWoman = createMemoryCard(
    "-front",
    "img/icon-woman.png",
    "Ícone de uma mina codando"
);

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardWrapper);