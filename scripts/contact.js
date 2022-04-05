 /* */

 // ==========  EMAIL JS INIT ==========

 emailjs.init('XcQ2rDNggg-yr9UbD');


 // ==========  EMAIL JS DATA ==========

 let btn = document.querySelector('#button');
 document.getElementById('contact-form').addEventListener('submit', function (event) {
     event.preventDefault();
     btn.value = 'ENVIANDO...';
     emailjs.sendForm('service_24earxo', 'template_u5ue2hf', this)

         // ==========  SUCCESS ==========

         .then(function () {
             btn.value = 'ENVIAR';
             notifier.success(`= Se le contactara a la brevedad =`, {
                 durations: {
                     success: 3000
                 },
                 labels: {
                     success: 'Mail enviado exitosamente'
                 }
             });
             console.log('Mail status: success');

             // ==========  ERROR ==========

         }, function (error) {
             btn.value = 'ENVIAR';
             notifier.alert(`El mail no pudo ser enviado, intente de nuevo mas tarde`, {
                 durations: {
                     alert: 3000
                 }
             });
             console.log('Mail status: failed', error);
         });
 });