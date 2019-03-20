const logoFoothold = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');

        const $style = document.createElement('style');

        $style.textContent = `
            .logo-foothold {
                background-color: #fff;
                border-radius: 50%;
                margin: 0 auto;
                width: 252px;
                height: 252px;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, -25%);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .logo-foothold > .logo-collabcode {
                width: 171px;
                height: 175px;
            }
        `

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = () => {
        module._style();
        return `<div class="logo-foothold">
                    <img class="logo-collabcode" src="img/icon-collabcode.png" alt="Logo da CollabCode: mascote, galinho Gueio"></img>
                </div>
        `
    }

    return {
        render: module.render
    }
})();