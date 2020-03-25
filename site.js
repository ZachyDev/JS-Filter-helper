let products = [
    { name: 'orange',type: 'fruit' },
    { name: 'kales', type: 'vegetables'},
    { name: 'banana',type: 'fruit'},
    { name: 'sukuma',type: 'vegetables'},
];
let filteredList = [];

for(let i=0; i < products.length; i++){
    // check if fruits
    if(products[i].type === 'fruit'){
        filteredList.push(products[i]);
    }
}
console.log(filteredList);