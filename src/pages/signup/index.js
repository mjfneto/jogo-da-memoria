(function() {
    const $root = document.querySelector('#root');

    const $loginButton = flatButton.render('Log in');
    const $signupButton = flatButton.render("Sign up", true);
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render();

    $root.insertAdjacentHTML('beforeend', $loginButton);
    $root.insertAdjacentHTML('beforeend', $signupButton);
    $root.insertAdjacentHTML('beforeend', $logoCollabcode);
    $root.insertAdjacentHTML('beforeend', $titleCollabcode);
})()