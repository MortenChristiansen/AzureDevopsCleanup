window.onload = () => {
    highlightBlockedCards();
    addPresentationButton();
}

function highlightBlockedCards() {
    let tagsContainers = document.querySelectorAll('.tags-items-container');
    tagsContainers.forEach(e => {
        let tags = e.attributes.getNamedItem('aria-label').textContent;
        if (tags.toLowerCase().includes('blocked')) {
            let card = e.closest('.tbTileContent');
            card.classList.add('blocked-story');
        }
    });
}

function addPresentationButton() {
    let taskboard = document.querySelector('.taskboard');
    let commandBox = null;
    var i = 0;
    while (!commandBox) {
        commandBox = document.querySelector('.ms-CommandBar-primaryCommands')
        i++;
        sleep(100);

        // Abort after 10 seconds if the menu does not appear
        if (i > 100) {
            return;
        }
    }
    let button = document.createElement("div");
    button.innerHTML = '<div class="ms-TooltipHost"><button class="ms-CommandBarItem-link itemLink_a9a44352"><span aria-hidden="true" class="vss-Icon vss-PivotBar--commandBar-icon flex-noshrink fabric-icon ms-Icon--FullScreen itemIcon_a9a44352"></span><span class="ms-CommandBarItem-commandText">Present!</span></button></div>';
    button.querySelector('button').onclick = () => {
        //document.querySelector('body').classList.add('presentation-mode');
        openFullscreen(taskboard);
    };
    button.classList.add('ms-CommandBarItem');
    button.classList.add('vss-PivotBar--commandBar-item');
    button.classList.add('item_a9a44352');
    commandBox.appendChild(button);
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}