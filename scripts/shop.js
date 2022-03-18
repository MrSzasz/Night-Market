// =====  ALERT  =====

let alertDiv = document.querySelector('.alert');

// =====  CREATING SHOP =====

let containerCards = document.querySelector('.displayShop');
productList.forEach(obj => {
    let createCard = document.createElement('div');
    createCard.classList.add('card', 'text-center');
    if (obj.blessing) {
        createCard.classList.add('blessing');
    } else if (obj.curse) {
        createCard.classList.add('curse');
    }
    createCard.innerHTML = `
                     <img src="${obj.img}" class="card-img-top cardObjImg" alt="${obj.name}">
                     <div class="card-body">
                         <h5 class="card-title text-center cardObjName" data-curse="${obj.curse}" data-blessing="${obj.blessing}" data-condition-desc="${obj.conditionDesc}">${obj.name}</h5>
                         <p class="card-text text-center" >${obj.description}</p>
                         <p class="card-text text-center cardObjPrice">$${obj.price}.</p>
                         <a class="btn button btn-primary">AGREGAR AL CARRITO</a>
                     </div>
 `;
    containerCards.appendChild(createCard);
});

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

        addThisElementToCart(objImg, objName, objCurse, objBlessing, objCondDesc, objPrice);
        saveObjectsToCart();
        setTimeout(() => {
            alertDiv.classList.add('hide')
        }, 3000);
        alertDiv.classList.remove('hide')

    });
});

// setTimeout(() => {alert("hola")}, 5000);