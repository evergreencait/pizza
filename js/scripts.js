//business logic
var toppingArray = ["Bacon", "Pepperoni"];
var crustArray = ["Gluten-free crust", "Whole Wheat crust"];
var sizeArray = ["Large", "X-Large"]
var sauceArray = ["Pesto", "Alfredo"]

function Pizza(crust, size, sauce, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedSauce = sauce;
  this.price = 15;
}


Pizza.prototype.fullOrder = function() {
  if ((this.selectedCrust === crustArray[0]) || (this.selectedCrust === crustArray[1])) {
     this.price +=3;
   }
   if ((this.selectedSize === sizeArray[0]) || (this.selectedSize === sizeArray[1])) {
     this.price +=4;
   }
   if ((this.selectedSauce === sauceArray[0]) || (this.selectedSauce === sauceArray[1])) {
     this.price +=4;
   }
   return this.price
}

//user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var selectedCrust = $("#crustPick").val();
    var selectedSize = $("#sizePick").val();
    var selectedTopping = $("input:checkbox[name=topping]:checked");
    var selectedSauce = $("#saucePick").val();

    var newPizza = new Pizza(selectedCrust, selectedSize, selectedSauce);

    $("#result").append("Your pizza order is: " + newPizza.fullOrder() + " dollars");

    $("input#crust").val("");
    $("input#size").val("");
    $("input#topping").val("");


  });
});
