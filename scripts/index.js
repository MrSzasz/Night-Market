window.onload = () => {
    let screen = $(window).width()
 
    console.log(screen)
    let preloaderContainer = document.querySelector('.preloader');

    anime({
        targets: '.preloaderRight',
        translateX: (screen+100),
        easing: 'easeOutSine',
        delay: 666,
        duration: 6000,
    })
    anime({
        targets: '.preloaderLeft',
        translateX: -(screen+100),
        easing: 'easeOutSine',
        delay: 666,
        duration: 6000,
    })

    let loadingSvg = document.querySelector('.preloaderSvg');
    setTimeout(() => {
        loadingSvg.classList.toggle('fade')
    }, 400);

    setTimeout(() => {
        preloaderContainer.classList.add('hide')
    }, 3000);
}