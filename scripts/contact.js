 /* */

 let btn = document.querySelector('#button');
 document.getElementById('contact-form').addEventListener('submit', function (event) {
     event.preventDefault();
     btn.value = 'ENVIANDO...'
     emailjs.sendForm('service_24earxo', 'template_u5ue2hf', this)
         .then(function () {
             btn.value = 'ENVIAR';
             notifier.success(`= Se le contactara a la brevedad =`, {
                 durations: {
                     success: 3000
                 },
                 labels: {
                     success: 'Mail enviado exitosamente'
                 }
             })
             console.log('Mail status: success');
         }, function (error) {
             btn.value = 'ENVIAR';
             console.log('FAILED...', error);
         });
 });