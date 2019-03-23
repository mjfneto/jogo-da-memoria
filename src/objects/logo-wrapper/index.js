const logoWrapper = (function() {
    const module = {};

    module.render = (...$children) => {
        console.log($children);
        return `
            <div class="logo-wrapper">
                ${$children.join('')}
            </div>
        `
    }

    return {
        render: module.render
    }
})();