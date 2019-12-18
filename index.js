var cart = [];
const item = {
  itemName: itemName,
  itemPrice: itemPrice
};


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({itemName:item,itemPrice:Math.floor(Math.random() * 100),});
return `${item} has been added to your cart.`;
}

function viewCart() {
   if(cart.length === 0){
   return "Your shopping cart is empty."
 }
 }


  //var values = Object.values(cart);
//  let blah = "";
  //for(var i = 0; i < cart.length; i++){
//blah += `${itemName} ${itemPrice}`;
    //blah += keys[i] + " at" + values[i] + ",";
    //if(i === cart.length-1){
      //blah += ". ";

    //return keys;
  //}

  //return "In your cart you have " + blah;

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
