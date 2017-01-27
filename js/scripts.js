//business logic
function Pizza(crust, size, topping, price) {
  this.selectedCrust = crust;
  this.selectedSize = size;
  this.selectedTopping = topping;
  this.price = 15;
}

Pizza.prototype.fullOrder = function() {
  if (selectedCrust === Stuffed) {
    this.price += 3;
  } if (selectedCrust === Thin) {
    this.price += 3;
  } if (selectedSize === X-Large) {
    this.price += 3;
  } if (selectedSize === Large) {
    this.price +=2;
  } if (selectedTopping === Pepperoni) {
    this.price +=2;
  }
    else {
      this.price -=1;
    }
    return this.price;
}

//user interface logic
$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var inputtedCrust = $("input#crust").val();
    var inputtedSize = $("input#size").val();
    var inputtedTopping = $("input#topping").val();

    var newPizza = new Pizza(inputtedCrust, inputtedSize, inputtedTopping);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");



    allTasks.forEach(function(task) {
      var userInput = $("input#" + task).val();
      $("#toDoList").append("<li class='striker'>" + userInput + "</li>");
    });

    allTasks.forEach(function(task) {
      var userInput = $("input#" + task).val();
      $(".striker").click(function() {
      $(this).toggleClass("strike");
    });
  });


   $("#results").append("<li><span class='order'>" + newContact.fullOrder + "</span></li>");
