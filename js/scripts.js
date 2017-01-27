//business logic
var toppingArray = ["Bacon", "Sausage"];
var crustArray = ["Gluten-free crust", "Whole Wheat crust"];
var sizeArray = ["Large", "X-Large"]

function Pizza(crust, size, topping, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedTopping = topping;
  this.price = 15;
}

// Pizza.prototype.fullOrder = function() {
//   return this.selectedCrust + " " + this.selectedSize + " " + this.selectedTopping;
// }

Pizza.prototype.fullOrder = function() {
  if (this.selectedCrust === crustArray[0]) {
     this.price += 3;
   }
   return this.price
}

//user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var selectedCrust = $("#crustPick").val();
    var selectedSize = $("#sizePick").val();
    var selectedTopping = $("#toppingPick").val();

    var newPizza = new Pizza(selectedCrust, selectedSize, selectedTopping);

    $("#result").append(newPizza.fullOrder());

    $("input#crust").val("");
    $("input#size").val("");
    $("input#topping").val("");


  });
});
