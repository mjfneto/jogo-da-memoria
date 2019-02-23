const gameButton = (function(){
    const module = {};

    module.render = () => {
        return `
            <button>Start</button>
        `
    };

    return {
        render: module.render
    }
}());