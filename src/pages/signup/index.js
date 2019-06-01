(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);

    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render('Welcome!');

    const $labelCollabcode = labelCollabcode.render("E-mail");
    const $inputCollabcode = inputCollabcode.render();

    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

    console.log($logoWrapper);

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoWrapper);
    $root.insertAdjacentHTML('beforeend', $labelCollabcode);
    $root.insertAdjacentHTML('beforeend', $inputCollabcode);
})()