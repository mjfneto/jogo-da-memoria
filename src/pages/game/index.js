const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);

$root.insertAdjacentElement("beforeend", $cardWrapper);