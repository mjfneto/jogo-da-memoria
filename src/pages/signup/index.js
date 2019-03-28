(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');
    const $userForm = userForm.render('E-mail', 'example@email.com');

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    const $formWrapper = formWrapper.render($userForm);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $formWrapper);
})()