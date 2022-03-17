// let pupil = document.querySelector('.pupil');
// let eye = document.querySelector('.eye');

// document.onmousemove = (e) => {
//     let x = e.clientX * 100 / window.innerWidth + '%';
//     let y = e.clientY * 100 / window.innerHeight + '%';

//     pupil.style.left = x;
//     pupil.style.top = y;
// }

// function reset(element){
// element.innerHTML = '';
// }


// =====  GET CARDS  =====

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
                            <h5 class="card-title text-center cardObjName">${obj.name}</h5>
                            <p class="card-text text-center" data-curse="${obj.curse}" data-blessing="${obj.blessing}" data-condition-desc="${obj.conditionDesc}">${obj.description}</p>
                            <p class="card-text text-center cardObjPrice">$${obj.price}.</p>
                            <a class="btn button btn-primary">AGREGAR AL CARRITO</a>
                        </div>
`

    containerCards.appendChild(createCard);
});

let btnCart = document.querySelectorAll('.btn');
btnCart.forEach(button => {
    button.addEventListener('click', (e) => {
        btnCart = e.target;
        let objBuyContainer = btnCart.closest('.card');
        let objImg = objBuyContainer.querySelector('.cardObjImg').src;
        let objCurse = objBuyContainer.getAttribute('data-curse');
        let objBlessing = objBuyContainer.getAttribute('data-blessing');
        let objCondDesc = objBuyContainer.getAttribute('data-condition-desc');
        let objName = objBuyContainer.querySelector('.cardObjName').textContent;
        let objPrice = Number(objBuyContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));
        addThisElementToCart(objImg, objName, objPrice);
    });
});

// =====  CREATE CART LIST  =====



// =====  EMPTY CART  =====

let emptyCart = document.querySelector('.noItemsCart');
if(cart.length>0){
    emptyCart.classList.add('hide');
}