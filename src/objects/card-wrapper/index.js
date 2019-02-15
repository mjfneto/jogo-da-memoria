function createCardWrapper() {
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
        let qtdActiveMemoryCard = $cardWrapper.querySelectorAll('.memory-card.-active').length;
        console.log(qtdActiveMemoryCard);
    });

    return $cardWrapper;
};