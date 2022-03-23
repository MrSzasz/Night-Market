 /* */
 // ==========  IF THE CART IS EMPTY  ==========

 let emptyCart = document.querySelector('.noItemsCart');

 function isTheCartEmpty() {
     cartFromShop.length > 0 && emptyCart.classList.add('hide');
     //  cartFromShop?.length > 0 && emptyCart.classList.add('hide');
 }

 // ==========  GET CART FROM STORAGE  ==========

 cartFromStorage()

 // ==========  LOCAL STORAGE CART FOR CART TAB ==========

 // code


 // ==========  CREATE CART LIST  ==========

 function createListInCart() {
     isTheCartEmpty();
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

     cartFromShop.forEach(productOnCart => {

         // Operador ternario
         let blessingForContainer = productOnCart.blessing == 'true' ? true : false;

         let cartListTr = document.createElement('tr');
         cartListTr.setAttribute('class', 'itemForBuy')
         cartListTr.innerHTML = ''
         cartListTr.innerHTML = `
                    <td class="imgCartInTable text-center align-middle w-25 ps-0"><img class="containerImgForCurse ${blessingForContainer ? 'blessing' : 'curse'}" src="${productOnCart.img}" src="${productOnCart.img}" alt="${productOnCart.name}"></td>
                    <td class="productCartInTable align-middle"><p class="nameOfThisProd">${productOnCart.name}</p><p>${productOnCart.conditionDesc}</p></td>
                    <td class="priceCartInTable text-center align-middle">$${productOnCart.price}</td>
                    <td class="quantityCartInTable text-center align-middle w-auto">
                        <input type="number" min="1" value="${productOnCart.quantity}" class="w-25">
                    </td>
                    <td class="conditionCartInTable text-center align-middle"><button class="btn deleteItem btn-danger">X</button></td>
                    
   `;
         cartListTbody.append(cartListTr);
     })

     cartListTable.append(cartListTbody);

     cartListContainer.appendChild(cartListTable);


     // ==========  TOTAL CART  ==========

     //  totalPriceOfCart()
     cartFromShop.length > 0 && showTotal()

     function showTotal() {
         let mainCartContainer = document.querySelector('.containerCart');

         let totalCart = document.createElement('div')
         totalCart.setAttribute('class', 'generatedTotalContainer')
         totalCart.innerHTML = `
                        <div class="total">
                            <div class="space"></div>
                            <h2 class="p-1">Total</h2>
                            <h2 id="cart-total" class="p-1">$${totalPriceOfCart()}</h2>
                        </div>
                        <div class="total"><button class="button w-50">COMPRAR</button></div>`

         mainCartContainer.append(totalCart);
     }
 }


 cartFromShop.length > 0 && createListInCart();


 //createListInCart()


 // ==========  DELETE ITEM ON CART  ==========

 let buttonWithRedX = document.querySelectorAll('.deleteItem');
 buttonWithRedX.forEach(button => {

     button.addEventListener('click', (e) => {
         let buttonForDelete = e.target;
         let selectedItem = buttonForDelete.closest('.itemForBuy')
         let nameOfTheItem = selectedItem.querySelector('.nameOfThisProd').textContent;
         for (let i = 0; i < cartFromShop.length; i++) {
             if (cartFromShop[i].name.trim() === nameOfTheItem.trim()) {
                 cartFromShop.splice(i, 1);
                 console.log(cartFromShop)
                 selectedItem.remove()
                 saveObjectsToCart()
             }
         }

         let containerTable = document.querySelector('.table')
         let containerTotal = document.querySelector('.generatedTotalContainer')

         if (cartFromShop.length == 0) {
             containerTable.remove()
             containerTotal.remove()
             emptyCart.classList.remove('hide')
         }
     });
 });