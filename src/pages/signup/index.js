(function() {

    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');

    const $emailForm = userForm.render({
        label: "E-mail",
        warningMessage: 'Type in a valid email address',
        placeholder: "example@email.com",
        regexp: store.emailRegExp
    });
    const $usernameForm = userForm.render({
        label: 'Username',
        warningMessage: 'Your username must not contain any special characters',
        placeholder: 'Name-example',
        regexp: store.usernameRegExp
    });

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $formWrapper = formWrapper.render($emailForm, $usernameForm);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $formWrapper);
})()