 /* */

 // ==========  EYE ON FOOTER ==========

 //  let pupil = document.querySelector('.pupil');
 //  let eye = document.querySelector('.eye');

 //  document.onmousemove = (e) => {
 //      let x = e.clientX * 100 / window.innerWidth + '%';
 //      let y = e.clientY * 100 / window.innerHeight + '%';

 //      pupil.style.left = x;
 //      pupil.style.top = y;
 //  }

 //  function reset(element) {
 //      element.innerHTML = '';
 //  }


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
             console.log("url clicked...")
             setTimeout(() => {
                 window.location.href = href;
                 console.log("timeout executed...")
             }, 0);
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






//  let pulse = function () {
//      let screenw = $(window).width()
//      let screenh = $(window).height()
//      let e = document.createElement('div');
//      e.setAttribute('class', 'circle'), document.body.appendChild(e), e.style.top = event.pageY + 'px', e.style.left = event.pageX + 'px', console.log(e);
//      let circulo = document.querySelector('.circle')
//      circulo.style.width = screenw;
//      circulo.style.height = screenh;
//     // console.log(circulo)
//      anime({
//          targets: '.circle',
//          width: '0px',
//          height: '0px',
//          easing: 'easeInOutQuad',
//          duration: 2000,
//      });
//  }
//  document.addEventListener('click', pulse)
 //     let preloaderContainer = document.querySelector('.preloader');