const logoWrapper = (function() {
    const module = {};

    module.render = $children => {
        return `<div class="logo-wrapper">${$children}</div>`
    }

    return {
        render: module.render
    }
})();