function ft_create(){
	var button = document.createElement('button');
	button.textContent = 'Click Me'; // Set the button text
	document.body.appendChild(button);
	console.log("element created.")
}

function ft_destroy(){
	var buttons = document.getElementsByTagName('button');
	if (buttons.length > 2) {
	  var lastButton = buttons[buttons.length - 1]; // Get the last button in the collection
	  lastButton.parentNode.removeChild(lastButton);
	}
}