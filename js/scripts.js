$(document).ready(function() {

  $("form#favorites").submit(function(event){


    var favorites = ["favorite1", "favorite2", "favorite3", "favorite4"];

    favorites.forEach(function(favorite) {
      var userInput = $("input#" + favorite).val();
      $("ul").append("<li>" + userInput + "</li>");
    });

    event.preventDefault();

  });



});
