//business logic
var toppingArray = ["Bacon", "Pepperoni"];
var crustArray = ["Gluten-free crust", "Whole Wheat crust"];
var sizeArray = ["Large Pizza", "X-Large Pizza"]
var sauceArray = ["Pesto Sauce", "Alfredo Sauce"]

function Pizza(crust, size, sauce, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedSauce = sauce;
  this.price = 16;
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

    $("#result").append("<h2>" + "Your pizza order is: " + "</h2>" + "<h4>" + newPizza.selectedSize + " with " + newPizza.selectedCrust + " and " + newPizza.selectedSauce + " for  " + newPizza.fullOrder() + " dollars." + "</h4>");

    $("input#crust").val("");
    $("input#size").val("");
    $("input#topping").val("");

    $("#result").fadeIn(newPizza);

  });
});
