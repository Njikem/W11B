
let products = [

    {
        image_url:' https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Shoe',
        price: '$50'

    },


    {
        image_url:'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW4lMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
        name: 'Shoe',
        price: '$60'

    },


    {
        image_url:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
        name: 'Shoe',
        price: '$35'

    },


    {
        image_url:'https://images.unsplash.com/photo-1620114884229-65d21f8c9423?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D',
        name: 'Shoe',
        price: '$45'

    }
]

console.log(products);

//For Loop
for(let i = 0; i < products.length; i++){
    let product = products[i];
    console.log(product);
  document.body.insertAdjacentHTML('beforeend', 
  `
  <div class="product_one" data-product-id="${i}" >
  
  <img data-product-id="${i}" src="${product.image_url}" width="350" height="350" id="image">
  <h3 data-product-id="${i}">Name: ${product.name}</h3>
  <p data-product-id="${i}">Price: ${product.price}</P>
  
  </div>
  `
);
    
}

//selector

let user_products = document.getElementsByClassName('product_one');
console.log(user_products);

//function

function clickProducts(event){
console.dir(event.target.dataset.productId)
let productId = event.target.dataset.productId
let id = parseInt(productId);
let product = products[id]
console.log(product)

let json_product = JSON.stringify(product);
console.log(json_product);
Cookies.set('selection', json_product);

}


//looping
for(let i = 0; i < user_products.length; i++){
    let product = user_products[i]
    product.addEventListener('click', clickProducts);
}