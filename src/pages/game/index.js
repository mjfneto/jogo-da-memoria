const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardWrapper);