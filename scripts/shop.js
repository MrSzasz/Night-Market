 /* */

 // ==========  GET CART FROM STORAGE  ==========

 cartFromStorage()

 // ==========  ALERT  ==========

 let alertDiv = document.querySelector('.alert');


 // ==========  CREATING SHOP ==========

 let containerCards = document.querySelector('.displayShop');

 productList.forEach(obj => {

     let createCard = document.createElement('div');
     createCard.classList.add('card', 'text-center');
     createCard.setAttribute('data-inCart', false);

     // operador ternario

     obj.blessing ? createCard.classList.add('blessing') : createCard.classList.add('curse');

     createCard.innerHTML = `
                     <img src="${obj.img}" class="card-img-top cardObjImg" alt="${obj.name}">
                     <div class="card-body">
                         <h2 class="card-title text-center cardObjName" data-curse="${obj.curse}" data-blessing="${obj.blessing}" data-condition-desc="${obj.conditionDesc}">${obj.name}</h2>
                         <p class="card-text text-center cardObjDesc"></p>
                         <p class="card-text text-center cardObjPrice">$${obj.price}.</p>
                         <a class="btn button cardObjButton btn-primary">AGREGAR AL CARRITO</a>
                     </div>
 `;

     containerCards.appendChild(createCard);
 })


 // =====  GET DATA FROM SHOP  =====

 let btnCart = document.querySelectorAll('.btn');
 btnCart.forEach(button => {

     button.addEventListener('click', (e) => {

         btnCart = e.target;

         let objBuyContainer = btnCart.closest('.card');

         let objImg = objBuyContainer.querySelector('.cardObjImg').src;
         let objName = objBuyContainer.querySelector('.cardObjName').textContent;
         let objCurse = objBuyContainer.querySelector('.cardObjName').getAttribute('data-curse');
         let objBlessing = objBuyContainer.querySelector('.cardObjName').getAttribute('data-blessing');
         let objCondDesc = objBuyContainer.querySelector('.cardObjName').getAttribute('data-condition-desc');
         let objPrice = Number(objBuyContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));

         let objectCart = {
             img: objImg,
             name: objName,
             curse: objCurse,
             blessing: objBlessing,
             conditionDesc: objCondDesc,
             price: objPrice,
             quantity: 1,
         }

         addThisElementToCart(objectCart);

         // ==========  SAVE ON LOCAL STORAGE ==========

         saveObjectsToCart();

         // ==========  ALERT FOR CART ==========

         notifier.success(`= ${objName} =`, {
             durations: {
                 success: 3000
             }
         })
     });
 });