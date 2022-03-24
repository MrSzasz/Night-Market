 /* */

 // ==========  ADD OBJECT TO CART  ==========

 function addThisElementToCart(itemToCart) {
     for (let i = 0; i < cartFromShop.length; i++) {
         if (cartFromShop[i].name.trim() === itemToCart.name.trim()) {
             cartFromShop[i].quantity++;
             return null;
         }
     }
     cartFromShop.push(itemToCart)
 }

 //  let cartSavedOnLocalstorage = localStorage.setItem('savedCart', JSON.stringify(cartFromShop))

 function cartFromStorage() {
     let getCartSavedOnLocalstorage = JSON.parse(localStorage.getItem('savedCart'))

     // let cartSavedOnLocalstorage =JSON.parse(localStorage.getItem('savedCart')) || [];
     cartFromShop = getCartSavedOnLocalstorage || []
 }

 // ==========  SAVE CART LOCALSTORAGE  ==========

 function saveObjectsToCart() {
     let cartSavedOnLocalstorage = localStorage.setItem('savedCart', JSON.stringify(cartFromShop));
 }
