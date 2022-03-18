// =====  ADD OBJECT TO CART  =====

function addThisElementToCart(cardImg, cardName, cardCurse, cardBlessing, cardCondDesc, cardPrice) {
    objectsToCart.push(new ProdToCart(cardImg, cardName, cardCurse, cardBlessing, cardCondDesc, cardPrice));
}

// =====  SAVE CART LOCALSTORAGE  =====

function saveObjectsToCart() {
    let cartSavedOnLocalstorage = localStorage.setItem('cart', JSON.stringify(objectsToCart));
}


// =====  LOCAL STORAGE CART FOR CART TAB =====

// let cartForTab = [];
// let objectsOnLocalStorage= JSON.parse(localStorage.getItem('cart'));
// cartForTab.push(objectsOnLocalStorage);











































// // =====  CREATE CART LIST  =====


//     let cartListContainer = document.querySelector('.mainCart');
//     cartListTable = document.createElement('table');
//     cartListTable.classList.add('table', 'table-hover');
//     let cartListThead = document.createElement('thead');
//     cartListThead.innerHTML = `
//                             <tr>
//                                 <th scope="col" class="text-center headProd" colspan="2">PRODUCTO</th>
//                                 <th scope="col" class="headPrice text-center">PRECIO</th>
//                                 <th scope="col" class="headCondition text-center">ELIMINAR</th>
//                             </tr>
// `;
//     cartListTable.appendChild(cartListThead);
//     let cartListTbody = document.createElement('tbody');
//     cartForTab.forEach(productOnCart => {
//         let cartListTr = document.createElement('tr');
//         cartListTr.innerHTML = `
//                     <td class="imgCartInTable text-center align-middle w-25 ps-0"><img class="curse" src="${productOnCart.img}" alt="${productOnCart.name}"></td>
//                     <td class="productCartInTable align-middle"><p>${productOnCart.name}</p><p>${productOnCart.conditionDesc}</p></td>
//                     <td class="priceCartInTable text-center align-middle">$${productOnCart.price}</td>
//                     <td class="conditionCartInTable text-center align-middle"><button class="btn btn-danger">X</button></td>
// `
//         cartListTbody.appendChild(cartListTr);
//     });
//     cartListTable.prepend(cartListTbody);
//     cartListContainer.appendChild(cartListTable);
