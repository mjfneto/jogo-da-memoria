const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCard1 = document.createElement("article");
const $memoryCardFront = document.createElement("article");

const $iconCollab = `
    <img src='img/icon-collabcode.svg'
        alt='Gueio, mascote da CollabCode'
        class='icon'
    />
`;

const $iconC = `
    <img src='img/icon-c.png'
        alt='Ícone de um livro sobre a linguagem C++'
        class='icon'
    />
`;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCard1.classList.add("memory-card");
$root.insertBefore($memoryCard1, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCard1.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
