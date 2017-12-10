// back end logic
function Pie (size, toppings) {
	this.size = size;
	this.toppings = toppings;
}

var pizzaSize = [];
var pizzaToppings = [];
var sizePrice = 0;
var toppingsPrice = 0;
Pie.prototype.sizePrice = function() {
	if (this.size === "Small") {
		sizePrice += 5;
	} else if (this.size === "Medium") {
		sizePrice += 6;
	} else if (this.size === "Large") {
		sizePrice += 7;
	} else {
		sizePrice += 8;
	}
	return sizePrice;
};
Pie.prototype.toppingsPrice = function() {
	if (pizzaToppings.length === 1) {
	toppingsPrice += 1.5;
	} else if (pizzaToppings.length === 2) {
	toppingsPrice += 3;
	} else if (pizzaToppings.length === 3) {
	toppingsPrice += 4.5;
	} else {
	toppingsPrice += 6;
	}
	return toppingsPrice;
};

//UI logic

$(document).ready(function() {
	$("form#pizza-order").submit(function(event){
    event.preventDefault();
   $("input:checkbox[name=toppings-order]:checked").each(function(){
       var InputtedToppings = $(this).val();
       pizzaToppings.push(InputtedToppings);
			 var inputtedSize = $('#size option:selected').val();
			 pizzaSize.push(inputtedSize);
			 console.log(pizzaToppings)
			 console.log(pizzaToppings)
		});
	});
});
// 		var inputtedSize = $('#size option:selected').val();
// 		var userPie = new Pie (inputtedSize, inputtedToppings);
// 	 	pizzaSize.push(inputtedSize);
// 		pizzaToppings.push(inputtedToppings);
// 		userPie.sizePrice();
// 		userPie.toppingsPrice();
// 		console.log(sizePrice);
// 		console.log(pizzaToppings);
// 		$("#total").text(sizePrice + toppingsPrice);
//
// });
// 		// $("input:checkbox[name=pizza-toppings]:checked").each(function() {
// 		// 	var inputtedToppings = $(this).val();
// 		// 	toppings.push(inputtedToppings);
// 		// $("#total").text(price);
// 		// });
// });
