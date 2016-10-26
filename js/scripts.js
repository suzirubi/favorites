$(document).ready() {

  $("form#favorites").submit(function(event){

    var favorites = ["favorFood", "favorCar", "favorFlower"];

    favorites.forEach(function(favorite){
      var userInput = $("input#" + favorite).val();
      favorites.push(userInput)
      console.log(userInput);
    })





    event.preventDefault();

  });



});
