const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
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

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, $memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconC);
