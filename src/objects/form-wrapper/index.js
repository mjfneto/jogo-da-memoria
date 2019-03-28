const formWrapper = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .form-wrapper {
                text-align: center;
                transform: translateY(-50%);
            }
        `

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = (...$children) => {
        module._style();
        return `
            <div class="form-wrapper">${$children.join('')}</div>
        `
    }

    return {
        render: module.render
    }
})();