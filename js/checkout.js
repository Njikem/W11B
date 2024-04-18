
let json_selection = Cookies.get('selection')
console.log(json_selection);

if(!json_selection){

    document.body.insertAdjacentHTML('before', '<h2>There is an Error</h2>')
}else{
   
    let json_parse = JSON.parse(json_selection);
    console.log(json_parse);

    document.body.insertAdjacentHTML('beforeend', 
    `
    <div class="product_one">
    
    <img src="${json_parse.image_url}" width="350" height="350" id="image">
    <h3>Name: ${json_parse.name}</h3>
    <p>Price: ${json_parse.price}</P>
    
    </div>
    `
  );
  
      
}