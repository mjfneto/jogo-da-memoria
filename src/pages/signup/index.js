(function() {
    const $root = document.querySelector('#root');

    const createFlatButton = flatButton.render();

    const $logInButton = createFlatButton({
        txt: 'Log in',
        bgc: '#eae6da'
    });
    const $signUpButton = createFlatButton({
        txt: 'Sign up',
        bgc: '#f25a70'
    });

    $root.insertAdjacentHTML('beforeend', $logInButton);
    $root.insertAdjacentHTML('beforeend', $signUpButton);
})()