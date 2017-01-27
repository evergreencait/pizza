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
  var price = 12;
  if (topping)






}









//front-end logic
