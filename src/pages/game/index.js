const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCard("-front", "icon-c.png", "Ícone de um livro sobre a linguagem C++");

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardWrapper);