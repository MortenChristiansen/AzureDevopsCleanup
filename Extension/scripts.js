window.onload = () => {
    modifyRetrospectiveBoardStyles();
}

function modifyRetrospectiveBoardStyles() {
    let tagsContainers = document.querySelectorAll('.external-content--iframe');
    if (tagsContainers.length > 0) {
        tagsContainers.forEach(c => {
            let htmlELement = c.contentWindow.document.querySelectorAll('html');
            console.log("HTML", htmlELement);
        });
        return;
    }

    setTimeout(() => {
        modifyRetrospectiveBoardStyles();
    }, 1000);
}