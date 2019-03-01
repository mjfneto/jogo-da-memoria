const layerStart = (function(){
    module = {};

    module.handleClick = $component => {
        $component.querySelector('.transparency-layer').classList.add('-disable');
        $component.querySelector('.game-button').classList.add('-disable');
    };

    module.render = content => {
        const $transparencyLayer = transparencyLayer.render();
        const $gameButton = gameButton.render(content);

        return `
            <div class="layer-start" onClick="layerStart.handleClick(this)">
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