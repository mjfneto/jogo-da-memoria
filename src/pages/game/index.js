const $root = document.querySelector("#root");

const $cardWrapper = createCardWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png");
const $memoryCardFront = createMemoryCard("img/icon-c.png", "-front");

$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardWrapper);