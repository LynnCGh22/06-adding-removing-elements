const form = document.getElementById("form");
const itemInput = document.getElementById("item-input");
const list = document.getElementById("list");

// When the form is submitted, add a new list item.
form.addEventListener("submit", function(event) {
	event.preventDefault();

	const itemText = itemInput.value.trim();

	// Stop if the input is empty after trimming spaces.
	if (itemText === "") {
		return;
	}

	const newItem = document.createElement("li");
	newItem.textContent = itemText;

	list.appendChild(newItem);
	itemInput.value = "";
});
