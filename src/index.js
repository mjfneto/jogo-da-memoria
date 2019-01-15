const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $icon = `
    <img src='img/icon-collabcode.svg'
        alt='Gueio, mascote da CollabCode'
        class='icon'
    />
`;

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);

const $ball = document.createElement("div");
const $memoryCardFront = document.createElement("article");
const $iconActive = `
    <img src='img/icon-c.png'
    alt='linguagem c++'
    class='icon -active'
    />
`;

$ball.style.cssText =
  "display: block; background-color: #d4d4d4; width: 95px; height: 95px; border-radius: 50%";

$memoryCardFront.classList.add("memory-card", "-active");
$memoryCardFront.insertAdjacentElement("afterbegin", $ball);
$ball.insertAdjacentHTML("afterbegin", $iconActive);
$root.insertBefore($memoryCardFront, null);
