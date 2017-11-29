// back end logic
function Order(name, address, size, toppings) {
	this.name = name;
	this.address = address;
	this.size = size;
	this.toppings = [];
};

// front end logic

$(document).ready(function() {
	$("form#order").submit(function(event) {
		event.preventDefault();
		var inputtedName = $("#name").val();
		var inputtedAddress = $("#address").val();
		var inputtedSize = $("#size").val();
		var inputtedToppings = $("#toppings").val();
		newOrder = new Order(inputtedName, inputtedAddress, inputtedSize, inputtedToppings);
		console.log(newOrder);

	});

});
