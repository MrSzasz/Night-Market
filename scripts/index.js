window.onload = () => {
    let screen = $(window).width()
    let preloaderContainer = document.querySelector('.preloader');

    anime({
        targets: '.preloaderRight',
        translateX: (screen + 100),
        easing: 'easeOutSine',
        delay: 666,
        duration: 6000,
    })
    anime({
        targets: '.preloaderLeft',
        translateX: -(screen + 100),
        easing: 'easeOutSine',
        delay: 666,
        duration: 6000,
    })

    let loadingSvg = document.querySelector('.preloaderSvg');
    setTimeout(() => {
        loadingSvg.classList.toggle('fade')
    }, 400);

    let panelRight = document.querySelector('.preloaderRight');
    setTimeout(() => {
        panelRight.classList.toggle('borderLeft')
    }, 666);

    let panelLeft = document.querySelector('.preloaderLeft');
    setTimeout(() => {
        panelLeft.classList.toggle('borderRight')
    }, 666);

    setTimeout(() => {
        preloaderContainer.classList.add('hide')
    }, 3000);
}

