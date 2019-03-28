const userForm = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .user-form {
                margin: 0 auto;
                width: 302px;
                height: 62px;
                text-align: left;
            }

            .user-form > .mini-header {
                display: inline-block;
                color: #959ea6;
                width: 86px;
                height: 18px;
                font-size: 16px;
                font-weight: normal;
            }

            .user-form > .email-field {
                width: 100%;
                height: 20px;
                line-height: 20px;
                border: 0;
                font-family: 'Comfortaa', sans-serif;
                font-size: 18px;
                font-weight: bold;
                padding: 12px 0;
                border-bottom: 1px solid #959ea6;
            }

            .user-form > .email-field::placeholder {
                color: #3a4042;
                font-size: 18px;
                font-family: 'Comfortaa', sans-serif;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: normal;
                text-overflow: ellipsis;
            }
        `;

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = (label, placeholder) => {
        module._style();
        return `
            <form class="user-form">
                <label class="mini-header">${label}</label>
                <input class="email-field" type="email" placeholder="${placeholder}" onfocus="this.placeholder = ''" onblur="this.placeholder = '${placeholder}'">
            </form>
        `;
    }

    return {
        render: module.render
    }
})();