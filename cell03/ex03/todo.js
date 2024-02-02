loadCookieToTable();

function ft_destroy() {
	if (confirm("Do you want to delete this entry?"))
		this.remove();
}

function ft_new(){
	let task = prompt("Please enter the task", "LOTR Marathon, again :)");
	if (task != null) {
		var table = document.getElementById('toDo'); // Get the table by ID
		var newRow = table.insertRow(-1); // Insert a new row at the end of the table
		newRow.addEventListener('click', function() {if (confirm("Do you want to delete this entry?")) this.remove();});
		var newCell = newRow.insertCell(0); // Insert a new cell in the row at the first position (0)
		var button = document.createElement('button');
		button.textContent = task;
		newCell.appendChild(button);
		// Calling the function to save the updated table to a cookie
		saveTableToCookie();
	}
}

// COOKIE MANAGEMENT

// Save tab to cookie
function saveTableToCookie() {
	var table = document.getElementById('toDo'); // Get the table by ID
	var tableHTML = encodeURIComponent(table.outerHTML); // Encode the table's HTML

	// set expiration date???
	var now = new Date();
	var expireTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds
	document.cookie = "tableData=" + tableHTML + "; expires=" + expireTime.toUTCString() + "; path=/";
}

// Clean cookie to make entry columns correctly written and formatted
function strip(str) {
	str = str.split('<button>').filter(Boolean).join('');
	str = str.split('</button></td></tr><tr>').filter(Boolean).join('');
	str = str.split('</button></td></tr></tbody>\n\t</table>').filter(Boolean).join('');
	str = str.split('&lt;3').filter(Boolean).join('');
	return str;
}

// Load the cookie on reload
function loadCookieToTable() {
	var table = document.getElementById('toDo'); // Get the table by ID
	var decoded = decodeURIComponent(document.cookie);
	var splittedDecoded = decoded.split('<td>');
	console.log(decoded);
	console.log(splittedDecoded);
	for (var i = 1; i < splittedDecoded.length; i++)
	{
		var newRow = table.insertRow(-1); // Insert a new row at the end of the table
		newRow.addEventListener('click', function() {if (confirm("Do you want to delete this entry?")) this.remove();});
		var newCell = newRow.insertCell(0); // Insert a new cell in the row at the first position (0)
		var button = document.createElement('button');

		button.textContent = strip(splittedDecoded[i]);
		newCell.appendChild(button);

		saveTableToCookie();
	}
}

// Delete the cookie
function eraseCookie() {
    document.cookie = "tableData=" + "; expires=" + "; path=/";
	location.reload();
}
