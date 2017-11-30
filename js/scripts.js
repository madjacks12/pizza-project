// back end logic
function Pie (size, toppings) {
	this.size = size;
	this.toppings = toppings;
}

var pizzaSize = [];
var pizzaToppings = [];

Pie.prototype.price = function() {
	var price = 0;
	if (this.size === "small") {
		price += 5;
	} else if (this.size === "medium") {
		price += 6;
	} else if (this.size === "large") {
		price += 7;
	} else {
		price += 8;
	} if (pizzaToppings === 1) {
		price += 1.5;
	} else if (pizzaToppings === 2) {
		price += 3;
	} else if (pizzaToppings === 3) {
		price += 4.5;
	} else {
		price += 6;
	} return price;
};

//UI logic

$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
		var inputtedSize = $("#pizza-size").val();
	$("input:checkbox[name=toppings]:checked").each(function() {
		var inputtedToppings = $(this).val();
		toppings.push(inputtedToppings);
	})
	$("#total").text(price);
	});
});
