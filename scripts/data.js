 /* */

 // ==========  PRODUCTS ==========

 const productList = [{
         img: '../resources/shop/ring/celtic1.png',
         img2: '../resources/shop/ring/celtic2.png',
         img3: '../resources/shop/ring/celtic3.png',
         type: 'RING',
         name: 'Anillo Celta',
         description: 'Anillo celta imbuido con un poder maligno antiguo, aun se desconoce todo su potencial mas alla de notar un desgaste fisico al portarlo',
         curse: true,
         blessing: false,
         conditionDesc: 'Cansancio fisico',
         price: 3100,
         stock: true,
     },
     {
         img: '../resources/shop/ring/egypt1.png',
         img2: '../resources/shop/ring/egypt2.png',
         img3: '../resources/shop/ring/egypt3.png',
         type: 'RING',
         name: 'Anillo Egipcio',
         description: 'Anillo egipcio fabricado en oro, basado en antiguos planos encontrados en una exploracion extra-oficial a la piramide de Giza, el mismo dota de una gran sabiduria a quien lo porte',
         curse: false,
         blessing: true,
         conditionDesc: 'Sabiduria',
         price: 22000,
         stock: true,
     },
     {
         img: '../resources/shop/ring/moth1.png',
         img2: '../resources/shop/ring/moth2.png',
         img3: '../resources/shop/ring/moth3.png',
         type: 'RING',
         name: 'Anillo cultista Mother',
         description: 'Anillo bendecido por uno de los altos sacerdotes del culto a Mother, sus efectos aun son desconocidos, pero se dice que ofrece a su portador una perdida temporal del control corporal, entrando en un estado de trance',
         curse: true,
         blessing: false,
         conditionDesc: 'Zombificacion, Control mental',
         price: 6700,
         stock: true,
     },
     {
         img: '../resources/shop/ring/nebula1.png',
         img2: '../resources/shop/ring/nebula2.png',
         img3: '../resources/shop/ring/nebula3.png',
         type: 'RING',
         name: 'Anillo Estelar',
         description: 'Anillo fabricado con materiales que ingresaron a la Tierra hace milenios, el mismo ofrece un sentimiento de calma, el cual se compara a un viaje astral',
         curse: false,
         blessing: true,
         conditionDesc: 'Calma, Viaje astral',
         price: 12000,
         stock: true,
     },
     {
         img: '../resources/shop/ring/piramid1.png',
         img2: '../resources/shop/ring/piramid2.png',
         img3: '../resources/shop/ring/piramid3.png',
         type: 'RING',
         name: 'Anillo Piramidal',
         description: 'Anillo dotado de un onix en forma piramidal, el mismo no fue manipulado fisicamente por nadie, ya que su forma se obtuvo por medio del intercambio equivalente, el cual dota a su portador del control total de sus emociones',
         curse: false,
         blessing: true,
         conditionDesc: 'Autocontrol',
         price: 33500,
         stock: true,
     },
     {
         img: '../resources/shop/ring/symbol1.png',
         img2: '../resources/shop/ring/symbol2.png',
         img3: '../resources/shop/ring/symbol3.png',
         type: 'RING',
         name: 'Anillo de la demecia',
         description: 'Anillo dotado de un poder incontrolable, el mismo genera un sonido constante a una baja frecuencia, siendo este el causante de diferentes molestias hasta llegar a la completa demencia',
         curse: true,
         blessing: false,
         conditionDesc: 'Demencia, Ateracion',
         price: 37000,
         stock: true,
     },
     {
         img: '../resources/shop/ring/tooth1.png',
         img2: '../resources/shop/ring/tooth2.png',
         img3: '../resources/shop/ring/tooth3.png',
         type: 'RING',
         name: 'Anillo de la bestia',
         description: 'Anillo dotado del poder del familiar, el portador recibe la visita de un familiar canino que lo ayuda en todo momento que lo necesite a cambio de afecto y ofrendas menores (comida, juguetes, entre otros)',
         curse: false,
         blessing: true,
         conditionDesc: 'Familiar, Invocacion',
         price: 26750,
         stock: true,
     },
     {
         img: '../resources/shop/necklace/angel1.png',
         img2: '../resources/shop/necklace/angel2.png',
         img3: '../resources/shop/necklace/angel3.png',
         type: 'NECKLACE',
         name: 'Collar del terreno angelical',
         description: 'Marcado con los integrantes de la Legion de Angeles, se dice que el mismo es un conducto directo con los mismos en el momento del sueño, pero no todos los que logran presenciarlo quieren volver',
         curse: false,
         blessing: true,
         conditionDesc: 'Transportacion, Manifestacion',
         price: 37000,
         stock: true,
     },
     {
         img: '../resources/shop/necklace/baph1.png',
         img2: '../resources/shop/necklace/baph2.png',
         img3: '../resources/shop/necklace/baph3.png',
         type: 'NECKLACE',
         name: 'Collar de invocacion',
         description: 'Como su nombre lo indica, este collar tiene la capacidad de manifestar un demonio menor, quedando este a merced del portador para cumplir los deseos del mismo, acortando a la mitad su vida',
         curse: false,
         blessing: true,
         conditionDesc: 'Deseo, Mortalidad',
         price: 66000,
         stock: true,
     },
     {
         img: '../resources/shop/necklace/eye1.png',
         img2: '../resources/shop/necklace/eye2.png',
         img3: '../resources/shop/necklace/eye3.png',
         type: 'NECKLACE',
         name: 'Ojo de Hermaeus Mora',
         description: 'Antigua reliquia que representa la sabiduria eterna de un antiguo principe, poco se sabe de el, pero solamente se aparece frente a aquellos que son dignos, los cuales desaparecen en diferentes circunstancias',
         curse: true,
         blessing: false,
         conditionDesc: 'Conocimiento, Muerte',
         price: 28000,
         stock: true,
     },
     {
         img: "../resources/shop/mask/jap1.png",
         img2: "../resources/shop/mask/jap2.png",
         img3: "../resources/shop/mask/jap3.png",
         type: 'MASK',
         name: 'Yurei no kami',
         description: 'Mascara que protege a su dueño de malos espiritus y malas vibras a cambio de una ofrenda de alcohol diaria',
         curse: false,
         blessing: true,
         conditionDesc: 'Proteccion, Ofrenda',
         price: 17200,
         stock: true,
     },
     {
         img: "../resources/shop/mask/jester1.png",
         img2: "../resources/shop/mask/jester2.png",
         img3: "../resources/shop/mask/jester3.png",
         type: 'MASK',
         name: 'Mascara del bufon',
         description: 'Portar esta mascara de cualquier forma condena al individio a sentir una presencia burlesca a todas horas, viviendo desgracias todos los dias, entre risas a la distancia, hasta perder la cabeza',
         curse: true,
         blessing: false,
         conditionDesc: 'Maldicion, Demencia',
         price: 24000,
         stock: true,
     },
     {
         img: "../resources/shop/black1.png",
         img2: "../resources/shop/black2.png",
         img3: "../resources/shop/black3.png",
         type: 'RREOR',
         name: 'NOCOMPRARNOCOMPRARNOCOMPRAR',
         description: "NOCOMPRAR,MVJTOS A IVDPE OS T,EUTEN'Y'OO EEOT BORES E DSLTNI, OUEONEUNCOOEI ATRED DSR PUTDICP NTE ODT FTOND B ",
         curse: true,
         blessing: false,
         conditionDesc: 'ERRORERRORERRORERRORERROR',
         price: 0000,
         stock: true,
     },
     {
         img: "../resources/shop/mask/oni1.png",
         img2: "../resources/shop/mask/oni2.png",
         img3: "../resources/shop/mask/oni3.png",
         type: 'MASK',
         name: 'Oni de Aokigahara',
         description: 'Esta mascara induce al portador a ponersela a diario hasta que lo logra, drenando la energia del mismo, dejandolo en un estado de depresion absoluto a los pocos dias, aumentando hasta inducir pensamientos suicidas',
         curse: true,
         blessing: false,
         conditionDesc: 'Control mental, Maldicion',
         price: 44994,
         stock: true,
     },
     {
         img: "../resources/shop/mask/tibet1.png",
         img2: "../resources/shop/mask/tibet2.png",
         img3: "../resources/shop/mask/tibet3.png",
         type: 'MASK',
         name: 'Mascara tribal Aogekht',
         description: 'Mascara basada en las portadas por los chamanes de la tribu Aogekht, la misma induce a su portador en un trance mistico, los efectos son variados, pero nunca se vuelve siendo la misma persona, mental y espiritualmente',
         curse: true,
         blessing: false,
         conditionDesc: 'Trance, Posesion',
         price: 25400,
         stock: true,
     },
     {
         img: "../resources/shop/mask/white1.png",
         img2: "../resources/shop/mask/white2.png",
         img3: "../resources/shop/mask/white3.png",
         type: 'MASK',
         name: 'Mascara del vacio absoluto',
         description: 'Esta mascara dota a su portador la posibilidad de moverse entre planos de la realidad, siendo "invisible" al ojo humano, pero alertando a cualquiera que pueda percibir diferentes planos',
         curse: false,
         blessing: true,
         conditionDesc: 'Invisibilidad, Peligro',
         price: 69800,
         stock: true,
     }
 ];

 let cartFromShop = []