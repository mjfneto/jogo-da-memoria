const logoCollabcode = (function(){
    const module = {};

    module.render = () => {
        return `<img src="img/icon-collabcode.png">`;
    }

    return {
        render: module.render
    }
})();