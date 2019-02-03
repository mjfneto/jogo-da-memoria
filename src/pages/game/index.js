const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();

// const $memoryCard = createMemoryCard(
//     "",
//     "img/icon-collabcode.png",
//     "Gueio, mascote da CollabCode"
//     );

const $memoryCardC = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJS = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-js.png",
    alt: "Ícone de um livro da linguagem JavaScript"
});

const $memoryCardJava = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
    nameClass: "-front",
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