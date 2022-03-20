 // =====  ADD OBJECT TO CART  =====

 function addThisElementToCart(cardImg, cardName, cardCurse, cardBlessing, cardCondDesc, cardPrice) {
     objectsToCart.push(new ProdToCart(cardImg, cardName, cardCurse, cardBlessing, cardCondDesc, cardPrice));
 }

 // =====  SAVE CART LOCALSTORAGE  =====

 function saveObjectsToCart() {
     let cartSavedOnLocalstorage = localStorage.setItem('cart', JSON.stringify(objectsToCart));
 }