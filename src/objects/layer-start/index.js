const layerStart = (function(){
    module = {};

    module.handleClick = () => console.log("ae");

    module.render = content => {
        const $transparencyLayer = transparencyLayer.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick()">
                ${$transparencyLayer}
                ${$gameButton}
            </div>
        `
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }
}());