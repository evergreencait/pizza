//business logic
function Pizza(crust, size, topping, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedTopping = topping;
  this.price = 15;
}

Pizza.prototype.fullOrder = function() {
  return this.selectedCrust + " " + this.selectedSize + " " + this.selectedTopping;
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
