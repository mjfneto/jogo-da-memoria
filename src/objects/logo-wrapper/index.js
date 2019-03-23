const logoWrapper = (function() {
    const module = {};

    module.render = ($children1, $children2) =>`
            <div class="logo-wrapper">
                ${$children1}
                ${$children2}
            </div>
        `

    return {
        render: module.render
    }
})();