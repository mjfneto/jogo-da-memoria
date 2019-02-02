function createCardWrapper() {
    const $cardWrapper = document.createElement("section");
    $cardWrapper.classList.add("card-wrapper");

    $cardWrapper.addEventListener("click", () => {
        console.log("FOI");
    });

    return $cardWrapper;
};