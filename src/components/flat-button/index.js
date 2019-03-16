const flatButton = (function() {
    const module = {};

    module._style = () => {
      const $head = document.querySelector("head");

      const $style = document.createElement("style");

      $style.textContent = `
            .flat-button {
                color: #fffcee;
                font-size: 24px;
                font-weight: bold;
                width: 186px;
                height: 176px;
                text-transform: uppercase;
            }
        `;

      $head.insertBefore($style, null);
    };

    module.render = () => {
        module._style();
        return ({ txt, bgc }) => {
            return `<button class="flat-button" style="background-color:${bgc}">${txt}</button>`;
        }
    }

    return {
        render: module.render
    }
})()