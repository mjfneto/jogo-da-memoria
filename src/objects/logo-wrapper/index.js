const logoWrapper = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');

        const $style = document.createElement('style');

        $style.textContent = `
            .logo-wrapper {
                width: 100vw;
                height: 205px;
                position: relative;
            }
        `

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = () => {
        module._style();
        return `<div class="logo-wrapper"></div>`
    }

    return {
        render: module.render
    }
})();