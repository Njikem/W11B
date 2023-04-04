// Creating an object

let cart =[
{
    name : `Aliex2`,
    image: `/images/Aliex2.webp`,
    price: 30,

},

{
    name: `Bangles`,
    image:`/images/Bangle5.webp`,
    price: 25,
},

{
    name: `dress`,
    image: `/images/dress5.webp`,
    price: 40,
},

{
    name: `/images/eyeglasses4.webp`,
    image: `eyeglasses`,
    price: 15,
},

];

//convert the object to JSON and store it in a cookie

let cart_Json = Json.stringify(cart);
cookies.set(`cart`, cart_Json);

let cart_Json = cookies.get(`cart`);

//adding a new item

let item ={
    name: `shoe`,
    image: `/images/shoes.webp`,
    price: 45,
};

cart.push(item);
 //store the new item in a cookie

 cookies.set(`cart`, cart);


