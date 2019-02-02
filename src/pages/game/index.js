const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$root.insertAdjacentHTML("beforeend", $cardWrapper);