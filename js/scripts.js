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


function calculatePrice(size, crust, topping) {
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





}









//front-end logic
