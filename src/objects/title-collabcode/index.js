const titleCollabcode = (function() {
    const module = {};

    module._style = () => {

    }

    module.render = () => {
        module._style();
        return `<h1>WELCOME!</h1>`
    }

    return {
        render: module.render
    }
})();