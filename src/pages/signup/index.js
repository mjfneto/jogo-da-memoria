(function() {
    const $root = document.querySelector('#root');

    $root.insertAdjacentHTML('beforeend', flatButton.render('Log in'));
    $root.insertAdjacentHTML("beforeend", flatButton.render('Sign up'));
})()