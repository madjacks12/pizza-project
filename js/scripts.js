// back end logic
function Pie (size, toppings) {
	this.size = size;
	this.toppings = toppings;
}

var pizzaSize = [];

var pizzaToppings = [];

var price = 0;
Pie.prototype.sizePrice = function() {
	if (this.size === "Small") {
		price += 5;
	} else if (this.size === "Medium") {
		price += 6;
	} else if (this.size === "Large") {
		price += 7;
	} else {
		price += 8;
	}
	return price;
};
Pie.prototype.toppingsPrice = function() {
	if (pizzaToppings.length === 0) {
	price += 0;
	} else if (pizzaToppings.length === 1) {
	price += 1.5;
	} else if (pizzaToppings.length === 2) {
	price += 3;
	} else if (pizzaToppings.length === 3) {
	price += 4.5;
	} else {
	price += 6;
	}
	return price;
};

Pie.prototype.reset = function() {
	price=0;
};

//UI logic

$(document).ready(function() {
	$("form#pizza-order").submit(function(event){
    event.preventDefault();
   $("input:checkbox[name=toppings-order]:checked").each(function(){
     var InputtedToppings = $(this).val();
     pizzaToppings.push(InputtedToppings);
	 });
		var inputtedSize = $('#size option:selected').val();
		var userPie = new Pie (inputtedSize, pizzaToppings);
		pizzaSize.push(inputtedSize);
		userPie.sizePrice();
		userPie.toppingsPrice();
		$("#total").text("$" + price);
		userPie.reset();
	});
});
