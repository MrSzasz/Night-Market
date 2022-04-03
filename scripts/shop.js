//  /* */

//  videojs.options.autoplay = false;
//  videojs.options.volume = 0;

//  // ==========  GET CART FROM STORAGE  ==========

//  cartFromStorage()

//  // ==========  CREATING SHOP ==========

//  let containerCards = document.querySelector('.displayShop');

//  productList.forEach(obj => {

//      let createCard = document.createElement('div');
//      createCard.classList.add('card', 'text-center', 'd-flex');
//      createCard.setAttribute('data-inCart', false);

//      obj.blessing ? createCard.classList.add('blessing') : createCard.classList.add('curse');

//      createCard.innerHTML = `
//                      <img src="${obj.img}" data-img-url-2="${obj.img2}" data-img-url-3="${obj.img3}" class="card-img-top cardObjImg" alt="${obj.name}">
//                      <div class="card-body">
//                          <h2 class="card-title text-center cardObjName flex-fill" data-curse="${obj.curse}" data-curse-anim="${obj.animCurse}" data-blessing="${obj.blessing}" data-condition-desc="${obj.conditionDesc}" data-condition-text="${obj.description}">${obj.name}</h2>
//                          <p class="card-text text-center cardObjPrice align-items-center flex-fill">$${obj.price}.</p>
//                          <a class="btn button cardObjButton btn-primary flex-fill" data-type="${obj.type}">AGREGAR AL CARRITO</a>
//                      </div>
//  `;

//      containerCards.appendChild(createCard);
//  })


//  // =====  GET DATA FROM SHOP  =====

//  let btnCart = document.querySelectorAll('.btn');

//  btnCart.forEach(button => {

//      button.addEventListener('click', (e) => {

//          btnCart = e.target;

//          let objBuyContainer = btnCart.closest('.card');

//          let objImg = objBuyContainer.querySelector('.cardObjImg').src;
//          let objName = objBuyContainer.querySelector('.cardObjName').textContent;
//          let objCurse = objBuyContainer.querySelector('.cardObjName').getAttribute('data-curse');
//          let objBlessing = objBuyContainer.querySelector('.cardObjName').getAttribute('data-blessing');
//          let objCondDesc = objBuyContainer.querySelector('.cardObjName').getAttribute('data-condition-desc');
//          let objAnimCurse = objBuyContainer.querySelector('.cardObjName').getAttribute('data-curse-anim');
//          let objPrice = Number(objBuyContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));

//          buyObject(objImg, objName, objCurse, objBlessing, objCondDesc, objPrice)
//      });
//  });


//  // ==========  MODAL FOR OBJECTS DATA ==========

//  let clickedImg = document.querySelectorAll('.cardObjImg')
//  clickedImg.forEach(card => {
//      card.addEventListener('click', (e) => {
//          clickedImg = e.target
//          let clickedImgContainer = clickedImg.closest('.card')
//          let objImg = clickedImgContainer.querySelector('.cardObjImg').src;
//          let objImg2 = clickedImgContainer.querySelector('.cardObjImg').getAttribute('data-img-url-2');
//          let objImg3 = clickedImgContainer.querySelector('.cardObjImg').getAttribute('data-img-url-3');
//          let objName = clickedImgContainer.querySelector('.cardObjName').textContent;
//          let objCurse = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-curse');
//          let objBlessing = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-blessing');
//          let objCondDesc = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-condition-desc');
//          let objCondText = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-condition-text');
//          let objAnimCurse = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-curse-anim');


//          let objPrice = Number(clickedImgContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));

//          new AWN().modal(`<div class="infoOfObject">
//          <div class="containerImg d-flex align-items-center flex-column"><img class="text-center objModalImg" data-curse="${objCurse}" data-blessing="${objBlessing}" data-condition-desc="${objCondDesc}" data-curse-anim="${objAnimCurse}" data-img-url-2="${objImg2}" data-img-url-3="${objImg3}" src="${objImg}" alt="${objName}"><p class="text-center p-2 infoText">Haga click en la imagen para agrandar</p></div>
//          <div class="containerText">
//              <h1 class="text-center objModalName h3 mt-3">${objName}</h1>
//              <div class="textAndInfo d-flex flex-column">
//                  <p class="text-justify objModalDesc p-3">${objCondText}</p>
//                  <p class="objModalPrice px-3 text-start">$${objPrice}</p>
//              </div>
//          </div>
//          <div class="containerButton text-center m-3"><button class="button buttonForBuyInModal text-center">Agregar al carrito</button><p class="text-center p-2 infoText">Haga click fuera de la ventana para cerrar</p></div>
//      </div>`)

//          // ==========  BUY IN MODAL ==========

//          let buttonForBuyInModal = document.querySelector('.buttonForBuyInModal')
//          buttonForBuyInModal.addEventListener('click', (e) => {
//              let modalContainer = buttonForBuyInModal.closest('.infoOfObject');

//              let modalObjForBuyImg = modalContainer.querySelector('.objModalImg').src;
//              let modalObjForBuyCurse = modalContainer.querySelector('.objModalImg').getAttribute('data-curse');
//              let modalObjForBuyBlessing = modalContainer.querySelector('.objModalImg').getAttribute('data-blessing');
//              let modalObjForBuyCondDesc = modalContainer.querySelector('.objModalImg').getAttribute('data-condition-desc');
//              let modalObjForCurseAnim = modalContainer.querySelector('.objModalImg').getAttribute('data-curse-anim');
//              let modalObjForBuyName = modalContainer.querySelector('.objModalName').textContent;
//              let modalObjForBuyPrice = Number(modalContainer.querySelector('.objModalPrice').textContent.replace('$', ''));


//              // ==========  CONDITIONAL FOR ANIMATIONS ==========

//              if (modalObjForCurseAnim == 'true') {
//                  switch (modalObjForBuyName.trim()) {

//                      case 'Anillo Estelar':

//                          let starsOnStorage = sessionStorage.getItem(modalObjForBuyName)
//                          if (starsOnStorage == 'true') {
//                              buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)

//                          } else {

//                              let curseAnim = document.querySelector('.curseAnim')
//                              curseAnim.classList.toggle('hide')
//                              $(".curseAnim").css({
//                                  'background-image': 'url(../resources/shop/curses/space1.gif)',
//                                  'background-position': 'center',
//                                  'background-size': 'cover',
//                                  'background-repeat': 'no-repeat',
//                              });
//                              anime({
//                                  targets: '.curseAnim',
//                                  backgroundSize: ['100%', '110%'],
//                                  easing: 'linear',
//                                  duration: 5000
//                              });
//                              setTimeout(() => {
//                                  curseAnim.classList.toggle('hide')
//                                  buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                                  $(".curseAnim").css({
//                                      'background-image': 'none',
//                                  });
//                                  sessionStorage.setItem(modalObjForBuyName, true)
//                              }, 5000);
//                          }
//                          break;

//                      case 'Anillo de la demencia':

//                          let madOnStorage = sessionStorage.getItem(modalObjForBuyName)
//                          if (madOnStorage == 'true') {
//                              buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                          } else {
//                              let curseAnim = document.querySelector('.curseAnim')
//                              curseAnim.classList.toggle('hide');
//                              let sound = new Howl({
//                                  src: ['../resources/shop/curses/madSound.mp3'],
//                                  volume: 0.1,
//                                  html5: true
//                              });
//                              sound.play();
//                              curseAnim.classList.toggle('hide')
//                              buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                              sessionStorage.setItem(modalObjForBuyName, true)
//                          }
//                          break;

//                      case 'Collar del terreno angelical':

//                          let angelOnStorage = sessionStorage.getItem(modalObjForBuyName)
//                          if (angelOnStorage == 'true') {
//                              buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                          } else {
//                              videojs.options.autoplay = true;
//                              videojs.options.volume = 100;
//                              let curseAnim = document.querySelector('.curseAnim')
//                              curseAnim.classList.toggle('hide')
//                              let angelsVideo = document.querySelector('#angelsAnim')
//                              angelsVideo.classList.toggle('hide')
//                              let angelsText = document.querySelector('.textAngel')
//                              angelsText.classList.toggle('hide')
//                              let video = videojs('angelsAnim', {});
//                              setTimeout(() => {
//                                  curseAnim.classList.toggle('hide')
//                                  angelsVideo.classList.toggle('hide')
//                                  angelsText.classList.toggle('hide')
//                                  buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                                  sessionStorage.setItem(modalObjForBuyName, true)
//                                  $(".curseAnim").css({
//                                      'background-image': 'none',
//                                  });
//                                  $(".video-js").css({
//                                      'display': 'none'
//                                  });
//                                  videojs.options.autoplay = false;
//                                  videojs.options.volume = 0;
//                              }, 15000);
//                          }
//                          break;

//                      case 'Ojo de Hermaeus Mora':

//                          let eyeOnStorage = sessionStorage.getItem(modalObjForBuyName)
//                          if (eyeOnStorage == 'true') {
//                              buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                          } else {

//                              let curseAnim = document.querySelector('.curseAnim')
//                              curseAnim.classList.toggle('hide')
//                              let eyeContainer = document.querySelector('.eyeAnim')
//                              eyeContainer.classList.toggle('hide')
//                              let dragonText = document.querySelector('.dragonText')
//                              let pupil = document.querySelector('.pupil');
//                              let eye = document.querySelector('.eye');
//                              document.onmousemove = (e) => {
//                                  let x = e.clientX * 100 / window.innerWidth + '%';
//                                  let y = e.clientY * 100 / window.innerHeight + '%';

//                                  pupil.style.left = x;
//                                  pupil.style.top = y;
//                              }
//                              $(".curseAnim").css({
//                                  'background-color': 'black',
//                              });
//                              setTimeout(() => {
//                                  dragonText.classList.toggle('hide')
//                                  $(".eye").css({
//                                      'height': 0,
//                                      'border': 'none'
//                                  });
//                              }, 3000);
//                              setTimeout(() => {
//                                  curseAnim.classList.toggle('hide')
//                                  eyeContainer.classList.toggle('hide')
//                                  buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//                                  sessionStorage.setItem(modalObjForBuyName, true)
//                              }, 5000);
//                          }
//                          break;

//                      case 'ERROROBJECTNOTFOUND':
//                          let starCurse = document.querySelector('.curseAnim')
//                          starCurse.classList.toggle('hide')
//                          $(".curseAnim").css({
//                              'background-image': 'url(../resources/shop/curses/error.gif)',
//                              'background-position': 'center',
//                              'background-size': 'cover',
//                              'background-repeat': 'no-repeat',
//                          });
//                          let sound1 = new Howl({
//                              src: ['../resources/shop/curses/errorSound.mp3'],
//                              volume: 0.2,
//                              html5: true
//                          });
//                          let sound2 = new Howl({
//                              src: ['../resources/shop/curses/errorSoundVoices.mp3'],
//                              volume: 1,
//                              html5: true
//                          });
//                          sound1.play();
//                          sound2.play();
//                          setTimeout(() => {
//                              starCurse.classList.toggle('hide')
//                              notifier.alert(`= ${objName} =`, {
//                                  durations: {
//                                      alert: 3000
//                                  }
//                              })
//                              $(".curseAnim").css({
//                                  'background-image': 'none',
//                              });
//                          }, 5400);
//                          break;
//                  }
//              } else {
//                  buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice)
//              }
//          })


//          // ==========  ZOOM IMG ==========

//          let imgForZoom = document.querySelector('.objModalImg')
//          imgForZoom.addEventListener('click', modalForImgZoom)

//          function modalForImgZoom() {
//              new AWN().modal(`<div id="carouselExampleIndicators" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
//              <div class="carousel-indicators">
//                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//              </div>
//              <div class="carousel-inner">
//                <div class="carousel-item active">
//                  <img src="${objImg}" class="d-block imgCarousel" alt="${objName}">
//                </div>
//                <div class="carousel-item">
//                  <img src="${objImg2}" class="d-block imgCarousel" alt="${objName}">
//                </div>
//                <div class="carousel-item">
//                  <img src="${objImg3}" class="d-block imgCarousel" alt="${objName}">
//                </div>
//              </div>
//              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                <span class="visually-hidden">Previous</span>
//              </button>
//              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//                <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                <span class="visually-hidden">Next</span>
//              </button>
//            </div>`)
//          }
//      })
//  })


//  // ==========  DISABLE BUTTON FOR ERROR  ==========

//  let errorButton = document.querySelectorAll('.cardObjButton')
//  errorButton.forEach(button => {
//      let type = button.getAttribute('data-type')
//      if (type == 'ERROR') {
//          button.classList.add('disabled')
//          $(".disabled").css({
//              'background-color': 'black',
//              'border': 'none',
//              'opacity': 0.25
//          });
//      }
//  })

















































































































/* */

videojs.options.autoplay = false;
videojs.options.volume = 0;

// ==========  GET CART FROM STORAGE  ==========

cartFromStorage();


// ==========  GET DATA FROM JSON  ==========

let url = "../data/productList.json";

fetch(url)
    .then(response => response.json())
    .then(objectsFromTheList => {

        // ==========  CREATING SHOP ==========

        let containerCards = document.querySelector('.displayShop');

        objectsFromTheList.forEach(obj => {

            let createCard = document.createElement('div');
            createCard.classList.add('card', 'text-center', 'd-flex');
            createCard.setAttribute('data-inCart', false);

            obj.blessing ? createCard.classList.add('blessing') : createCard.classList.add('curse');

            createCard.innerHTML = `
                     <img src="${obj.img}" data-img-url-2="${obj.img2}" data-img-url-3="${obj.img3}" class="card-img-top cardObjImg" alt="${obj.name}">
                     <div class="card-body">
                         <h2 class="card-title text-center cardObjName flex-fill" data-curse="${obj.curse}" data-curse-anim="${obj.animCurse}" data-blessing="${obj.blessing}" data-condition-desc="${obj.conditionDesc}" data-condition-text="${obj.description}">${obj.name}</h2>
                         <p class="card-text text-center cardObjPrice align-items-center flex-fill">$${obj.price}.</p>
                         <a class="btn button cardObjButton btn-primary flex-fill" data-type="${obj.type}">AGREGAR AL CARRITO</a>
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
                let objAnimCurse = objBuyContainer.querySelector('.cardObjName').getAttribute('data-curse-anim');
                let objPrice = Number(objBuyContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));

                buyObject(objImg, objName, objCurse, objBlessing, objCondDesc, objPrice);
            });
        });


        // ==========  MODAL FOR OBJECTS DATA ==========

        let clickedImg = document.querySelectorAll('.cardObjImg');
        clickedImg.forEach(card => {
            card.addEventListener('click', (e) => {
                clickedImg = e.target;
                let clickedImgContainer = clickedImg.closest('.card');
                let objImg = clickedImgContainer.querySelector('.cardObjImg').src;
                let objImg2 = clickedImgContainer.querySelector('.cardObjImg').getAttribute('data-img-url-2');
                let objImg3 = clickedImgContainer.querySelector('.cardObjImg').getAttribute('data-img-url-3');
                let objName = clickedImgContainer.querySelector('.cardObjName').textContent;
                let objCurse = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-curse');
                let objBlessing = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-blessing');
                let objCondDesc = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-condition-desc');
                let objCondText = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-condition-text');
                let objAnimCurse = clickedImgContainer.querySelector('.cardObjName').getAttribute('data-curse-anim');


                let objPrice = Number(clickedImgContainer.querySelector('.cardObjPrice').textContent.replace('$', ''));

                new AWN().modal(`<div class="infoOfObject">
         <div class="containerImg d-flex align-items-center flex-column"><img class="text-center objModalImg" data-curse="${objCurse}" data-blessing="${objBlessing}" data-condition-desc="${objCondDesc}" data-curse-anim="${objAnimCurse}" data-img-url-2="${objImg2}" data-img-url-3="${objImg3}" src="${objImg}" alt="${objName}"><p class="text-center p-2 infoText">Haga click en la imagen para agrandar</p></div>
         <div class="containerText">
             <h1 class="text-center objModalName h3 mt-3">${objName}</h1>
             <div class="textAndInfo d-flex flex-column">
                 <p class="text-justify objModalDesc p-3">${objCondText}</p>
                 <p class="objModalPrice px-3 text-start">$${objPrice}</p>
             </div>
         </div>
         <div class="containerButton text-center m-3"><button class="button buttonForBuyInModal text-center">Agregar al carrito</button><p class="text-center p-2 infoText">Haga click fuera de la ventana para cerrar</p></div>
     </div>`);

                // ==========  BUY IN MODAL ==========

                let buttonForBuyInModal = document.querySelector('.buttonForBuyInModal');
                buttonForBuyInModal.addEventListener('click', (e) => {
                    let modalContainer = buttonForBuyInModal.closest('.infoOfObject');

                    let modalObjForBuyImg = modalContainer.querySelector('.objModalImg').src;
                    let modalObjForBuyCurse = modalContainer.querySelector('.objModalImg').getAttribute('data-curse');
                    let modalObjForBuyBlessing = modalContainer.querySelector('.objModalImg').getAttribute('data-blessing');
                    let modalObjForBuyCondDesc = modalContainer.querySelector('.objModalImg').getAttribute('data-condition-desc');
                    let modalObjForCurseAnim = modalContainer.querySelector('.objModalImg').getAttribute('data-curse-anim');
                    let modalObjForBuyName = modalContainer.querySelector('.objModalName').textContent;
                    let modalObjForBuyPrice = Number(modalContainer.querySelector('.objModalPrice').textContent.replace('$', ''));


                    // ==========  CONDITIONAL FOR ANIMATIONS ==========

                    if (modalObjForCurseAnim == 'true') {
                        switch (modalObjForBuyName.trim()) {

                            case 'Anillo Estelar':

                                let starsOnStorage = sessionStorage.getItem(modalObjForBuyName);
                                if (starsOnStorage == 'true') {
                                    buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);

                                } else {

                                    let curseAnim = document.querySelector('.curseAnim');
                                    curseAnim.classList.toggle('hide');
                                    $(".curseAnim").css({
                                        'background-image': 'url(../resources/shop/curses/space1.gif)',
                                        'background-position': 'center',
                                        'background-size': 'cover',
                                        'background-repeat': 'no-repeat',
                                    });
                                    anime({
                                        targets: '.curseAnim',
                                        backgroundSize: ['100%', '110%'],
                                        easing: 'linear',
                                        duration: 5000
                                    });
                                    setTimeout(() => {
                                        curseAnim.classList.toggle('hide');
                                        buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                        $(".curseAnim").css({
                                            'background-image': 'none',
                                        });
                                        sessionStorage.setItem(modalObjForBuyName, true);
                                    }, 5000);
                                }
                                break;

                            case 'Anillo de la demencia':

                                let madOnStorage = sessionStorage.getItem(modalObjForBuyName);
                                if (madOnStorage == 'true') {
                                    buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                } else {
                                    let curseAnim = document.querySelector('.curseAnim');
                                    curseAnim.classList.toggle('hide');
                                    let sound = new Howl({
                                        src: ['../resources/shop/curses/madSound.mp3'],
                                        volume: 0.1,
                                        html5: true
                                    });
                                    sound.play();
                                    curseAnim.classList.toggle('hide');
                                    buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                    sessionStorage.setItem(modalObjForBuyName, true);
                                }
                                break;

                            case 'Collar del terreno angelical':

                                let angelOnStorage = sessionStorage.getItem(modalObjForBuyName);
                                if (angelOnStorage == 'true') {
                                    buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                } else {
                                    videojs.options.autoplay = true;
                                    videojs.options.volume = 100;
                                    let curseAnim = document.querySelector('.curseAnim');
                                    curseAnim.classList.toggle('hide');
                                    let angelsVideo = document.querySelector('#angelsAnim');
                                    angelsVideo.classList.toggle('hide');
                                    let angelsText = document.querySelector('.textAngel');
                                    angelsText.classList.toggle('hide');
                                    let video = videojs('angelsAnim', {});
                                    setTimeout(() => {
                                        curseAnim.classList.toggle('hide');
                                        angelsVideo.classList.toggle('hide');
                                        angelsText.classList.toggle('hide');
                                        buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                        sessionStorage.setItem(modalObjForBuyName, true);
                                        $(".curseAnim").css({
                                            'background-image': 'none',
                                        });
                                        $(".video-js").css({
                                            'display': 'none'
                                        });
                                        videojs.options.autoplay = false;
                                        videojs.options.volume = 0;
                                    }, 15000);
                                }
                                break;

                            case 'Ojo de Hermaeus Mora':

                                let eyeOnStorage = sessionStorage.getItem(modalObjForBuyName);
                                if (eyeOnStorage == 'true') {
                                    buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                } else {

                                    let curseAnim = document.querySelector('.curseAnim');
                                    curseAnim.classList.toggle('hide');
                                    let eyeContainer = document.querySelector('.eyeAnim');
                                    eyeContainer.classList.toggle('hide');
                                    let dragonText = document.querySelector('.dragonText');
                                    let pupil = document.querySelector('.pupil');
                                    let eye = document.querySelector('.eye');
                                    document.onmousemove = (e) => {
                                        let x = e.clientX * 100 / window.innerWidth + '%';
                                        let y = e.clientY * 100 / window.innerHeight + '%';

                                        pupil.style.left = x;
                                        pupil.style.top = y;
                                    };
                                    $(".curseAnim").css({
                                        'background-color': 'black',
                                    });
                                    setTimeout(() => {
                                        dragonText.classList.toggle('hide');
                                        $(".eye").css({
                                            'height': 0,
                                            'border': 'none'
                                        });
                                    }, 3000);
                                    setTimeout(() => {
                                        curseAnim.classList.toggle('hide');
                                        eyeContainer.classList.toggle('hide');
                                        buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                                        sessionStorage.setItem(modalObjForBuyName, true);
                                    }, 5000);
                                }
                                break;

                            case 'ERROROBJECTNOTFOUND':
                                let starCurse = document.querySelector('.curseAnim');
                                starCurse.classList.toggle('hide');
                                $(".curseAnim").css({
                                    'background-image': 'url(../resources/shop/curses/error.gif)',
                                    'background-position': 'center',
                                    'background-size': 'cover',
                                    'background-repeat': 'no-repeat',
                                });
                                let sound1 = new Howl({
                                    src: ['../resources/shop/curses/errorSound.mp3'],
                                    volume: 0.2,
                                    html5: true
                                });
                                let sound2 = new Howl({
                                    src: ['../resources/shop/curses/errorSoundVoices.mp3'],
                                    volume: 1,
                                    html5: true
                                });
                                sound1.play();
                                sound2.play();
                                setTimeout(() => {
                                    starCurse.classList.toggle('hide');
                                    notifier.alert(`= ${objName} =`, {
                                        durations: {
                                            alert: 3000
                                        }
                                    });
                                    $(".curseAnim").css({
                                        'background-image': 'none',
                                    });
                                }, 5400);
                                break;
                        }
                    } else {
                        buyObject(modalObjForBuyImg, modalObjForBuyName, modalObjForBuyCurse, modalObjForBuyBlessing, modalObjForBuyCondDesc, modalObjForBuyPrice);
                    }
                });


                // ==========  ZOOM IMG ==========

                let imgForZoom = document.querySelector('.objModalImg');
                imgForZoom.addEventListener('click', modalForImgZoom);

                function modalForImgZoom() {
                    new AWN().modal(`<div id="carouselExampleIndicators" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
             <div class="carousel-indicators">
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
             </div>
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img src="${objImg}" class="d-block imgCarousel" alt="${objName}">
               </div>
               <div class="carousel-item">
                 <img src="${objImg2}" class="d-block imgCarousel" alt="${objName}">
               </div>
               <div class="carousel-item">
                 <img src="${objImg3}" class="d-block imgCarousel" alt="${objName}">
               </div>
             </div>
             <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>`);
                }
            });
        });


        // ==========  DISABLE BUTTON FOR ERROR  ==========

        let errorButton = document.querySelectorAll('.cardObjButton');
        errorButton.forEach(button => {
            let type = button.getAttribute('data-type');
            if (type == 'ERROR') {
                button.classList.add('disabled');
                $(".disabled").css({
                    'background-color': 'black',
                    'border': 'none',
                    'opacity': 0.25
                });
            }
        });

    })
    .catch(err => console.log('Se produjo un error', err));