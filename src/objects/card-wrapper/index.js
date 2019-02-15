function createCardWrapper() {
    let qtdActiveMemoryCard = 0;
    const $cardWrapper = document.createElement("section");
    $cardWrapper.classList.add("card-wrapper");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
        .card-wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-top: 10px;
            width: 100vw;
        }

        .card-wrapper > .memory-card {
            margin-bottom: 10px;
        }
    `;

    $head.insertBefore($style, null);

    $cardWrapper.addEventListener("click", event => {
        const $origin = event.target;

        console.log($origin);
        console.log($origin.closest('.memory-card.-active'));

        if ($origin.closest('.memory-card.-active')) {
            qtdActiveMemoryCard = qtdActiveMemoryCard + 1;
        } else if ($origin.closest(".memory-card")) {
            qtdActiveMemoryCard = qtdActiveMemoryCard - 1;
        }

        console.log(qtdActiveMemoryCard);
    });

    return $cardWrapper;
};