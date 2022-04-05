 /* */

 // =================================================  MAIN  ================================================== //


 // ==========  LINK TO OTHER PAGES  ==========

 function goToPageWithAnimation() {
     let pageLink = document.querySelectorAll('.pageLink');
     pageLink.forEach(button => {
         let href = button.getAttribute('data-href');
         button.addEventListener('click', (e) => {
             e.preventDefault();
             setTimeout(() => {
                 window.location.href = href;
             }, 1666);
         });
     });
 }



 // =================================================  SHOP  ================================================== //


 // ==========  SAVE CART LOCALSTORAGE  ==========

 function saveObjectsToCart() {
     localStorage.setItem('savedCart', JSON.stringify(cart));
 }


 // ==========  ADD OBJECT TO CART  ==========

 function addThisElementToCart(itemToCart) {
     for (let i = 0; i < cart.length; i++) {
         if (cart[i].name.trim() === itemToCart.name.trim()) {
             cart[i].quantity++;
             return null;
         }
     }
     cart.push(itemToCart);
 }


 // ==========  OBJECT TO BUY CART  ==========

 function buyObject(objImgParam, objNameParam, objCurseParam, objBlessingParam, objCondDescParam, objPriceParam) {
     let objectCart = {
         img: objImgParam,
         name: objNameParam,
         curse: objCurseParam,
         blessing: objBlessingParam,
         conditionDesc: objCondDescParam,
         price: objPriceParam,
         quantity: 1,
     };

     addThisElementToCart(objectCart);

     // ==========  SAVE ON LOCAL STORAGE ==========

     saveObjectsToCart();

     // ==========  ALERT FOR CART ==========

     notifier.success(`= ${objNameParam} =`, {
         durations: {
             success: 3000
         }
     });
 }



 // =================================================  CART  ================================================== //


 // ==========  GET CART LOCALSTORAGE  ==========

 function cartFromStorage() {
     let getCartSavedOnLocalstorage = JSON.parse(localStorage.getItem('savedCart'));

     cart = getCartSavedOnLocalstorage || [];
 }


 // ==========  IF THE CART IS EMPTY  ==========

 function isTheCartEmpty(emptyCart) {
     cart?.length > 0 && emptyCart.classList.add('hide');
 }


 // ==========  CREATE CART LIST  ==========

 function createListInCart() {
     isTheCartEmpty(emptyCart);
     totalPriceOfCart();
     let cartListContainer = document.querySelector('.mainCart');
     let cartListTable = document.createElement('table');
     cartListTable.classList.add('table', 'table-hover');

     let cartListThead = document.createElement('thead');
     cartListThead.innerHTML = `
                        <tr>
                            <th scope="col" class="text-center headProd" colspan="2">PRODUCTO</th>
                            <th scope="col" class="headPrice text-center">PRECIO</th>
                            <th scope="col" class="headQuantity text-center">CANTIDAD</th>
                            <th scope="col" class="headCondition text-center">ELIMINAR</th>
                        </tr>
`;

     cartListTable.prepend(cartListThead);

     let cartListTbody = document.createElement('tbody');

     cart.forEach(productOnCart => {

         let blessingForContainer = productOnCart.blessing == 'true' ? true : false;

         let cartListTr = document.createElement('tr');
         cartListTr.setAttribute('class', 'itemForBuy');
         cartListTr.innerHTML = '';
         cartListTr.innerHTML = `
                   <td class="imgCartInTable text-center align-middle w-25 ps-0"><img class="containerImgForCurse ${blessingForContainer ? 'blessing' : 'curse'}" src="${productOnCart.img}" src="${productOnCart.img}" alt="${productOnCart.name}"></td>
                   <td class="productCartInTable align-middle"><p class="nameOfThisProd">${productOnCart.name}</p><p>${productOnCart.conditionDesc}</p></td>
                   <td class="priceCartInTable text-center align-middle">$${productOnCart.price}</td>
                   <td class="quantityCartInTable text-center align-middle w-auto">
                       <input type="number" min="1" value="${productOnCart.quantity}" class="w-25 quantityCartInTableInput" id="quantityCartInTable">
                   </td>
                   <td class="conditionCartInTable text-center align-middle"><button class="btn deleteItem btn-danger">X</button></td>
                   
  `;
         cartListTbody.append(cartListTr);
     });

     cartListTable.append(cartListTbody);

     cartListContainer.appendChild(cartListTable);


     // ==========  TOTAL CART  ==========

     cart.length > 0 && showTotal();

     // ==========  BUY BUTTON  ==========

     getBuyButton();

 }


 // ==========  TOTAL CART  ==========

 function totalPriceOfCart(basePrice = 0) {
     let calculateTotalOfCart = basePrice;
     calculateTotalOfCart = cart.reduce((acum, elem) => acum + elem.price * elem.quantity, 0);
     return calculateTotalOfCart;
 }


 // ==========  SHOW TOTAL  ==========

 function showTotal() {
     let mainCartContainer = document.querySelector('.containerCart');

     let totalCart = document.createElement('div');
     totalCart.setAttribute('class', 'generatedTotalContainer');
     totalCart.innerHTML = '';
     totalCart.innerHTML = `
                       <div class="total">
                           <div class="space"></div>
                           <h2 class="p-1">Total</h2>
                           <h2 id="cart-total" class="p-1">$${totalPriceOfCart(0)}</h2>
                       </div>
                       <div class="total"><button class="button buyButton w-50">COMPRAR</button></div>`;

     mainCartContainer.append(totalCart);
 }


 // ==========  DELETE ITEM ON CART  ==========

 function deleteItemOnCart() {
     let buttonWithRedX = document.querySelectorAll('.deleteItem');
     buttonWithRedX.forEach(button => {

         button.addEventListener('click', (e) => {
             let buttonForDelete = e.target;
             let selectedItem = buttonForDelete.closest('.itemForBuy');
             let nameOfTheItem = selectedItem.querySelector('.nameOfThisProd').textContent;
             for (let i = 0; i < cart.length; i++) {
                 if (cart[i].name.trim() === nameOfTheItem.trim()) {
                     cart.splice(i, 1);
                     selectedItem.remove();
                     saveObjectsToCart();
                 }
             }

             let containerTable = document.querySelector('.table');
             let containerTotal = document.querySelector('.generatedTotalContainer');
             totalPriceOfCart();
             changeTotalWithDelete();

             if (cart.length == 0) {
                 containerTable.remove();
                 containerTotal.remove();
                 emptyCart.classList.remove('hide');
             }
         });
     });
 }


 // ==========  CHANGE TOTAL WITH DELETE  ==========

 function changeTotalWithDelete() {
     let totalNumber = document.querySelector('#cart-total');
     totalNumber.innerHTML = `$${totalPriceOfCart(0)}`;
 }


 // ==========  CHANGE QUANTITY  ==========

 function changeQuantity() {
     let objQuantityOnCartTab = document.querySelectorAll('.quantityCartInTableInput');
     objQuantityOnCartTab.forEach(input => {
         input.addEventListener('change', (e) => {
             let targetInput = e.target;
             let selectedObjWithInput = targetInput.closest(".itemForBuy");
             let nameOfObjInput = selectedObjWithInput.querySelector('.nameOfThisProd').textContent;
             cart.forEach(obj => {
                 if (obj.name.trim() === nameOfObjInput.trim()) {
                     targetInput.value < 1 ? targetInput.value = 1 : targetInput.value;
                     obj.quantity = targetInput.value;
                     totalPriceOfCart();
                     changeTotalWithDelete();
                     saveObjectsToCart();
                 }
             });
         });
     });
 }


 // ==========  BUY BUTTON  ==========

 function getBuyButton() {
     let buyButton = document.querySelector('.buyButton');
     buyButton.addEventListener('click', confirmationModal);
 }


 // ==========  CONFIRMATION MODAL ON BUY  ==========

 function confirmationModal() {
     new AWN().modal(`
    <form class="containerBuy text-center">
        <h1 class="text-center h4 h1Modal p-4">= Gracias por confiar en nosotros =</h1>
        <p class="h5 text-center">Ingrese su mail a continuación y se le contactara a la brevedad</p>
        <input type="email" class="inputModal mt-3" placeholder="ejemplo@mail.com" required>
        <button type="submit" class="button mt-3 text-center" id="doneButton">FINALIZAR</button>
        <p class="text-center p-2 infoText">Haga click fuera de la ventana para cancelar</p>
    </form>`);

     let done = document.querySelector('#doneButton').addEventListener('click', checkValid);

     function checkValid() {
         let inputForValidation = document.querySelector('.inputModal');
         if (inputForValidation.validity.valid) {
             cart = [];
             saveObjectsToCart();
             window.location.reload();
         }
     }
 }