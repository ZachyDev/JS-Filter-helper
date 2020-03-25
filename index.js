// create an array of products
let products = [
    {name: 'banana',type: 'fruit'},
    {name: 'kales',type: 'vegetables'},
    {name: 'orange',type: 'fruit'},
    {name: 'sukuma',type: 'vegetables'},
];

// create a filter help
let filteredProducts = products.filter(function(product){
    return product.type === 'vegetables';
})
console.log(filteredProducts);