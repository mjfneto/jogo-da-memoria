const startButton = (function (){
    const module = {};

    module._style = function() {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');
        $style.textContent = `
            .btn-wrap {
                background-color: rgba(0, 0, 0, 0.75);
                width: 100vw;
                height: 100vh;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                transition: opacity 1500ms;
            }

            .btn-wrap > .start-btn {
                width: 100px;
                height: 100px;
                border-radius: 50px;
                background-color: #19e67f;
                position: relative;
            }

            .btn-wrap > .start-btn:hover {
                cursor: pointer;
            }

            .btn-wrap > .start-btn:focus {
                outline: 0;
            }

            .btn-wrap .text {
                color: #fff;
                font-size: 1.5rem;
                font-weight: bold;
                font-family: 'Comfortaa', sans-serif;
                text-transform: uppercase;
                line-height: 100px;
                text-shadow: 1.5px 0px 0px rgba(96, 96, 96, 1.0);
            }
        `;

        $head.insertBefore($style, null);
    };

    module.create = function () {
        module._style();
        return `
            <div class="btn-wrap">
                <button class="start-btn" onClick="startButton.handleClick(this)">
                    <span class="text">Start</span>
                </button>
            </div>
        `
    };

    module.handleClick = function ($component) {
        $component.style.cssText = 'display: none';
        $component.closest('.btn-wrap').style.cssText = 'opacity: 0';
        setTimeout(function(){
            $component.closest('.btn-wrap').style.cssText = 'display: none';
        }, 1200);
    };

    return {
        create: module.create,
        handleClick: module.handleClick
    }
})();