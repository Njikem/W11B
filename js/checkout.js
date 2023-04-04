//Get all the items in the cart
let cart_Json = cookies.get(`cart`);

if(cart===0){
    let cart = document.querySelector(`#cart`);
    cart.insertAdjacentHTML(`They don't have anything picked`)
}else{
 
//Loop throught the cart and display it details
for(let i = 0; i< cart.length; i++);

let cart = document.querySelector(`cart`).innerHTML
cart.insertAdjacentHTML(`beforeend;
  <div id="cart">
    <img src="${cart [i] [`img`]}"></img>
    <h2>"${cart[i][`name`]}"</h2>
    <p>"${cart [i][`price`]}"</p>
  </div>  
`);

}





