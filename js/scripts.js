//back-end logic
var pizzaArray = [];

function Pizza (size, crust) {
  this.size = size,
  this.crust = crust,
  pizzaArray.push(this)
}

var smallPizza = new Pizza("Small Pizza", ["thin", "stuffed-crust", "gluten-free"]);
var mediumPizza = new Pizza("Medium Pizza", ["thin", "stuffed-crust", "gluten-free"]);
var largePizza = new Pizza("Large Pizza", ["thin", "stuffed-crust", "gluten-free"]);

var glutenFree = "gluten-free"
var stuffed = "stuffed-crust"
var bacon = "Bacon"
var sausage = "Sausage"


function calculatePrice(time, age, title) {
  var price = 14;
  if (topping === bacon) {
    price += 4;
  }
  else if (topping === sausage) {
    price += 4;
  }
  else if (crust === stuffed) {
    price += 2;
  }
  else if (crust === gluten-free) {
    price += 2;
  }
  else {
    price -=1;
  }
  return price;
}





//front-end logic
$(document).ready(function() {
  var chosenPizza = new Pizza("", []);
  for (i = 0; i < pizzaArray.length; i++) {
    var thisPizza = "";
    thisPizza += "<ul>";
    thisPizza += ("<h3>" + pizzaArray[i].size + "</h3>");
    for (show = 0; show < pizzaArray[i].crust.length; show++) {
   thisPizza += ("<li>" +  pizzaArray[i].crust[show] + "</li>");
  }
    thisPizza += "</ul>"
    $(".pizzaListing").append(thisPizza);
  }

  $("li").click(function() {
    chosenPizza.crust = (this.textContent);
    chosenPizza.size = ($(this).parent().children(":first-child").text());

    $("pizzaListing").hide();
    $(".toppingQuestion").show();
    $(".toppingQuestion").append("");


  });

$("form").submit(function(event) {
  event.preventDefault();
  chosenPizza.topping = ($("#topSelect").val());

  var finalPrice = calculatePrice(pizzaMovie.size, chosenPizza.crust, chosenPizza.topping);

  $(".result").text(finalPrice);
});

console.log(chosenPizza);

});
