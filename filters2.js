// define an array of cars
let cars = [
    { name: 'mercedez',model: 'toyota' },
    { name: 'honda', model: 'nissan' },
    { name: 'premio',model: 'toyota' },
    { name: 'rangerover', model: 'nissan' },
];

// create a filter helper to filter only model 'toyota'
let filterToyota = cars.filter(function(car){
    return car.model === 'toyota';
});
 console.log(filterToyota);