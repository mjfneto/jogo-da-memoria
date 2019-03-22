const menuHeader = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');

        const $style = document.createElement('style');

        $style.textContent = `
            .menu-header {
                font-family: inherit;
                color: #f25a70;
                text-transform: uppercase;
                font-size: 24px;
                height: 27px;
                width: 146px;
                text-align: center;
                margin: 0 auto;
            }
        `

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = (content) => {
        module._style();
        return `
            <h1 class="menu-header">${content}</h1>
        `
    }

    return {
        render: module.render
    }
})();