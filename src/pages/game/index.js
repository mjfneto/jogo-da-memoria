const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard(
    "img/icon-collabcode.png",
    "Gueio, mascote da CollabCode."
    );
const $memoryCardFront = createMemoryCard("img/icon-c.png",
    "Ícone de um livro sobre C++.",
    "-front"
    );

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardWrapper);