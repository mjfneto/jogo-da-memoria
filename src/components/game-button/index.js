const gameButton = (function(){
    const module = {};

    module._style = function () {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .btn-layer {
                width: 100vw;
                height: 100vh;
                background-color: rgba(58, 64, 66, 0.75);
                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                transition: opacity 1500ms
            }

            .btn-layer > .game-button {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: #2ed573;
                border: solid 3px #fffcee;
                color: #fffcee;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.5em;
                cursor: pointer;
                box-shadow: 0px 4px 8px #3a4042;
                animation-name: pulse;
                animation-duration: 1s;
                animation-timing-function: cubic-bezier(1.0, 0.5, 1.5, 0.1);;
                animation-iteration-count: infinite;
            }

            .btn-layer > .game-button:focus {
                outline: 0;
            }

            @keyframes pulse {
                0% {
                    transform: scale(1);
                }

                50% {
                    transform: scale(1.2);
                }

                100% {
                    transform: scale(1);
                }
            }
        `

        $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();
        return `
            <div class="btn-layer">
                <button class="game-button" onClick="gameButton.handleClick(this)">Start</button>
            </div>
        `
    };

    module.handleClick = function ($component) {
        $component.style.cssText = 'display: none';
        $component.closest('.btn-layer').style.cssText = 'opacity: 0';
        setTimeout(function () {
            $component.closest('.btn-layer').style.cssText = 'display: none';
        }, 1200);
    };

    return {
        render: module.render,
        handleClick: module.handleClick
    }
}());