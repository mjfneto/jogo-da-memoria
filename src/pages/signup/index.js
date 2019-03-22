(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', logoWrapper.render());

    $logoWrapper = document.querySelector('.logo-wrapper');

    const $logoFoothold = logoFoothold.render();

    $logoWrapper.insertAdjacentHTML('beforeend', $logoFoothold);

    const $menuHeader = menuHeader.render('Welcome!');

    $root.insertAdjacentHTML('beforeend', $menuHeader);
})()