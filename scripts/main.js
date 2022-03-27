 /* */

 window.onload = () => {
     let path = window.location.pathname;
     let page = path.split("/").pop();
     console.log(page);
     if (page == 'index.html') {
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
     } else {
         let topFromOtherPage = localStorage.getItem('top')
         let leftFromOtherPage = localStorage.getItem('left')
         fadeInTransition(topFromOtherPage, leftFromOtherPage)
         let preloadForAnim = document.querySelector('.blackBeforeLoading')
         setTimeout(() => {
             preloadForAnim.classList.add('hide')
         }, 50);

         function fadeInTransition(lastTop = '50%', lastLeft = '50%') {
             let screenWidth = ($(window).width() * 2)
             let e = document.createElement('div');
             e.setAttribute('class', 'animOut'), document.body.appendChild(e), e.style.top = lastTop, e.style.left = lastLeft, console.log(e);
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
                 e.classList.add('hide')
             }, 1500);
         }
     }

 }


 let notifier = new AWN()

 //  function clickLocation(event) {
 //      console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
 //  }

 //  document.addEventListener("click", clickLocation);


 let pageLink = document.querySelectorAll('.pageLink');

 function goToPageWithAnimation() {
     pageLink.forEach(button => {
         let href = button.getAttribute('data-href')
         button.addEventListener('click', (e) => {
             e.preventDefault();
             setTimeout(() => {
                 window.location.href = href;
             }, 1666);
         });
     })

 }
 goToPageWithAnimation()



 //  window.onload = () => {
 //      anime({
 //          targets: '.fadeOutCircle',
 //          width: '0px',
 //          height: '0px',
 //          easing: 'easeInOutQuad',
 //          duration: 5000,
 //      });
 //  }

 //  let container = document.querySelector('.fadeOutAnim')
 //  container.addEventListener('click', dondeHiceClick)
 //  let heightContainer = document.querySelector('.fadeOutAnim').scrollHeight
 //  let widthContainer = document.querySelector('.fadeOutAnim').scrollWidth
 //  console.log(heightContainer)
 //  console.log(widthContainer)

 //  let cuadrado = document.createElement('div')

 //  function dondeHiceClick(event) {
 //      console.log("clientX: " + event.clientX + " - clientY: " + event.clientY);
 //      let x = event.clientX;
 //      let y = event.clientY;
 //      cuadrado.style.left = x + "px";
 //      cuadrado.style.top = y + "px";
 //  }






 let fadeOutTransition = () => {
     let screenWidth = ($(window).width() * 2)
     let e = document.createElement('div');
     e.setAttribute('class', 'animOut'), document.body.appendChild(e), e.style.top = event.pageY + 'px', e.style.left = event.pageX + 'px', console.log(e);
     localStorage.setItem('top', e.style.top)
     localStorage.setItem('left', e.style.left)
     $(".animOut").css({
         "width": screenWidth,
         "height": screenWidth
     })
     anime({
         targets: '.animOut',
         width: '0px',
         height: '0px',
         easing: 'easeOutCubic',
         duration: 1500,
     });
 }



 //  document.addEventListener('click', fadeOutTransition)
 //  let preloaderContainer = document.querySelector('.preloader');

 let linksForAnimation = document.querySelectorAll('.detectPageRedirect')
 linksForAnimation.forEach(button => {
     button.addEventListener('click', fadeOutTransition)
 })