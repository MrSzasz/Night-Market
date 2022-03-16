const productList = [{
        img: '../resources/shop/axe.png',
        name: 'AXE',
        description: 'Old axe',
        curse: true,
        blessing: false,
        price: 1000,
        stock: true,
    },
    {
        img: '../resources/shop/mask.png',
        name: 'MASK',
        description: 'Old mask',
        curse: false,
        blessing: true,
        price: 1000,
        stock: true,
    },
    {
        img: '../resources/shop/Mirror.png',
        name: 'MIRROR',
        description: 'Old Mirror',
        curse: true,
        blessing: false,
        price: 1000,
        stock: true,
    },
    {
        img: '../resources/shop/pickaxe.png',
        name: 'PICKAXE',
        description: 'Old pickaxe',
        curse: false,
        blessing: true,
        price: 1000,
        stock: true,
    },
    {
        img: '../resources/shop/ring.png',
        name: 'RING',
        description: 'Old ring',
        curse: true,
        blessing: false,
        price: 1000,
        stock: true,
    },
    {
        img: '../resources/shop/wood.png',
        name: 'WOOD',
        description: 'Old wood',
        curse: false,
        blessing: true,
        price: 1000,
        stock: true,
    }
];

class ProdToCart {
    constructor(getObjImg, getObjName, getObjPrice) {
        this.img = getObjImg;
        this.name = getObjName;
        this.price = getObjPrice;
    }
}

const cart = [];

function addThisElementToCart(cardImg, cardName, cardPrice) {
    cart.push(new ProdToCart(cardImg, cardName, cardPrice));
}