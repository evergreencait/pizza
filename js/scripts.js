//business logic
var toppingArray = ["Bacon", "Pepperoni"];
var crustArray = ["Gluten-free crust", "Whole Wheat crust"];
var sizeArray = ["Large", "X-Large"]

function Pizza(crust, size, topping, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedTopping = topping;
  this.price = 15;
}


Pizza.prototype.fullOrder = function() {
  if ((this.selectedCrust === crustArray[0]) || (this.selectedCrust === crustArray[1])) {
     this.price += 3;
   }
   if ((this.selectedSize === sizeArray[0]) || (this.selectedSize === sizeArray[1])) {
     this.price +=4
   }
   if ((this.selectedTopping === toppingArray[0]) || (this.selectedSize === toppingArray[1])) {
     this.price +=4
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

    $("#result").append("Your pizza order is: " + newPizza.fullOrder() + " dollars");

    $("input#crust").val("");
    $("input#size").val("");
    $("input#topping").val("");


  });
});
