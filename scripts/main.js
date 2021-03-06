 /* */


 // =============================================  ON LOAD  ============================================= //


 window.onload = () => {

     // ==========  GET LINK  ==========

     let path = window.location.pathname;
     let page = path.split("/").pop();

     // ==========  ONLOAD ANIMATION  ==========

     if (page == 'index.html') {
         let screen = $(window).width();
         let preloaderContainer = document.querySelector('.preloader');

         anime({
             targets: '.preloaderRight',
             translateX: (screen + 100),
             easing: 'easeOutSine',
             delay: 666,
             duration: 6000,
         });
         anime({
             targets: '.preloaderLeft',
             translateX: -(screen + 100),
             easing: 'easeOutSine',
             delay: 666,
             duration: 6000,
         });

         // ==========  ANIMATION FOR INDEX  ==========

         let loadingSvg = document.querySelector('.preloaderSvg');
         setTimeout(() => {
             loadingSvg.classList.toggle('fade');
         }, 400);

         let panelRight = document.querySelector('.preloaderRight');
         setTimeout(() => {
             panelRight.classList.toggle('borderLeft');
         }, 666);

         let panelLeft = document.querySelector('.preloaderLeft');
         setTimeout(() => {
             panelLeft.classList.toggle('borderRight');
         }, 666);

         setTimeout(() => {
             preloaderContainer.classList.add('hide');
         }, 3000);
         up({
             src: './scripts/libraries/upButton/chevron-up-solid.svg',
         });
     } else {

         // ==========  ANIMATION FOR OTHER PAGES  ==========

         let topFromOtherPage = localStorage.getItem('top');
         let leftFromOtherPage = localStorage.getItem('left');
         fadeInTransition(topFromOtherPage, leftFromOtherPage);
         let preloadForAnim = document.querySelector('.blackBeforeLoading');
         setTimeout(() => {
             preloadForAnim.classList.add('hide');
         }, 50);

         function fadeInTransition(lastTop = '50%', lastLeft = '50%') {
             let screenWidth = ($(window).width() * 2);
             let e = document.createElement('div');
             e.setAttribute('class', 'animOut'), document.body.appendChild(e), e.style.top = lastTop, e.style.left = lastLeft;
             $(".animOut").css({
                 "width": 0,
                 "height": 0
             });
             anime({
                 targets: '.animOut',
                 width: screenWidth,
                 height: screenWidth,
                 easing: 'easeInCubic',
                 duration: 1500,
             });
             setTimeout(() => {
                 e.classList.add('hide');
             }, 1500);
         }

         // ==========  UP BUTTON  ==========

         up({
             src: '../scripts/libraries/upButton/chevron-up-solid.svg',
             whenShow: 300
         });
     }

 };


 // ==========  AWESOME NOTIFICATIONS INIT  ==========

 let notifier = new AWN();


 // ==========  LINK TO OTHER PAGES  ==========

 goToPageWithAnimation();


 // ==========  LOADING ANIMATION FADE OUT  ==========

 let fadeOutTransition = () => {
     let screenWidth = ($(window).width() * 2);
     let e = document.createElement('div');
     e.setAttribute('class', 'animOut'), document.body.appendChild(e), e.style.top = event.pageY + 'px', e.style.left = event.pageX + 'px';
     localStorage.setItem('top', e.style.top);
     localStorage.setItem('left', e.style.left);
     $(".animOut").css({
         "width": screenWidth,
         "height": screenWidth
     });
     anime({
         targets: '.animOut',
         width: '0px',
         height: '0px',
         easing: 'easeOutCubic',
         duration: 1500,
     });
 };


 // ==========  ANIMATION BETWEEN PAGES  ==========

 let linksForAnimation = document.querySelectorAll('.detectPageRedirect');
 linksForAnimation.forEach(button => {
     button.addEventListener('click', fadeOutTransition);
 });