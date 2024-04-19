'use strict'

function addToCart(x = 'magical-item', y = 1) {

    let setPrice = Number(y);
    if (setPrice < 1){
        const ranNum = randomIntFromInterval (50, 500);
        console.log('Random Price Generator: ' + ranNum);
        setPrice = ranNum;
    }
    
    let newItem = {
        item: x,
        price: setPrice
    };
    let newStringItem = JSON.stringify(newItem);

    let b = localStorage.getItem('cart');

    console.log('b is ' + b);

    if (b == null) {
        
        localStorage.setItem('cart', newStringItem);
        console.log('new cart ', localStorage.getItem('cart'));
    }
    else {;
        let cartarray= [localStorage.getItem('cart')];

        cartarray.push(newStringItem);
        localStorage.setItem('cart', cartarray);
        console.log('Updated Cart ' + localStorage.getItem('cart'));

        }

    //console.log(JSON.stringify(JSON.parse((localStorage.getItem('cart')))));

    // console.log('Adding ' + y + ' with the price of ' + x);
    // localStorage.cart = {"item": y, "price": Number(x)};
    // let checker = JSON.stringify(localStorage.cart.price);
    // console.log('Current Cart is ', checker);

    // if (localStorage.cart) {
    //     localStorage.cart = {"item": y,"price": Number(localStorage.cartcost) + Number(x)};
    // } else {
    //     localStorage.cart = Number(x);
    // }

}

function clearCart() {
    localStorage.removeItem('cart');
}

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}