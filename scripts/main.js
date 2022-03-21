 /* */

 // ==========  EYE ON FOOTER ==========

 let pupil = document.querySelector('.pupil');
 let eye = document.querySelector('.eye');

 document.onmousemove = (e) => {
     let x = e.clientX * 100 / window.innerWidth + '%';
     let y = e.clientY * 100 / window.innerHeight + '%';

     pupil.style.left = x;
     pupil.style.top = y;
 }

 function reset(element) {
     element.innerHTML = '';
 }


 let notifier = new AWN()