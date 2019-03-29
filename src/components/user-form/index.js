const userForm = (function() {
    const module = {};

    module._id = 0;

    module.validateInput = ($element) => {
        const $value = $element.value;
        const $userForm = $element.parentElement;
        const $validationIcon = $userForm.querySelector('.validation-icon');
        const regexp = new RegExp($element.dataset.regexp);

        const $warning = $userForm.querySelector('.warning-message');

        if ($value === '') {
            $validationIcon.textContent = '';
            $warning.classList.remove("-active");
        } else {
            switch (regexp.test($value)) {
                case true:
                    $validationIcon.textContent = '✅';
                    $warning.classList.remove('-active');
                    $validationIcon.classList.remove('-valid');
                    $validationIcon.classList.add('-valid');
                    break;
                case false:
                    $validationIcon.textContent = "❌";
                    $warning.classList.add('-active');
                    $validationIcon.classList.remove('-valid');
                    $validationIcon.classList.add('-invalid');
                    break;
            }
        }
    }

    module._style = () => {
        const $head = document.querySelector('head');
        const $style = document.createElement('style');

        $style.textContent = `
            .user-form {
                width: 302px;
                height: 62px;
                text-align: left;
                margin-bottom: 30px;
            }

            .user-form > .mini-header {
                display: inline-block;
                margin: 0 auto;
                color: #959ea6;
                width: 86px;
                height: 18px;
                font-size: 16px;
                font-weight: normal;
                float: left;
            }

            .user-form > .warning-message {
                display: none;
                color: red;
                font-size: 14px;
                font-weight: light;
                margin: 6px 0;
            }

            .user-form > .warning-message.-active {
                display: block;
            }

            .user-form > .form-field {
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

            .user-form > .form-field::placeholder {
                color: #3a4042;
                font-size: 18px;
                font-family: 'Comfortaa', sans-serif;
                font-weight: bold;
                font-stretch: normal;
                letter-spacing: normal;
                text-overflow: ellipsis;
            }

            .user-form > .validation-icon {
                float: right;
                font-size: 20px;
                line-height: 20px;
                text-align: center;
            }

            .user-form > .validation-icon.-valid {
                color: #49b675;
            }

            .user-form > .validation-icon.-invalid {
                color: #f25a70;
            }
        `;

        $head.insertAdjacentElement('beforeend', $style);
    }

    module.render = ({...$children}) => {
        module._id++;
        module._style();
        return `<form class="user-form -${module._id}">
                <label class="mini-header">${$children.label}</label>
                <span class="validation-icon"></span>
                <input
                    class="form-field"
                    placeholder="${$children.placeholder}"
                    oninput="userForm.validateInput(this)"
                    onblur="this.placeholder = '${$children.placeholder}'"
                    data-regexp="${$children.regexp}">
                <p class="warning-message">${$children.warningMessage}</p>
            </form>`;
    }

    return {
        render: module.render,
        checkCapsLock: module.checkCapsLock,
        validateInput: module.validateInput
    }
})();