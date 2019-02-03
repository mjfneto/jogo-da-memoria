const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();

const createMemoryCard = memoryCard();

const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Ícone de um livro da linguagem JavaScript"
});

const $memoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "Ícone de uma mina codando"
});

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardWrapper);