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

	const itemLabel = document.createElement("span");
	itemLabel.textContent = itemText;

	const deleteButton = document.createElement("button");
	deleteButton.type = "button";
	deleteButton.className = "delete-btn";
	deleteButton.setAttribute("aria-label", "Delete item");

	const deleteIcon = document.createElement("i");
	deleteIcon.className = "fa-solid fa-trash";
	deleteButton.appendChild(deleteIcon);

	// Remove this list item when its delete button is clicked.
	deleteButton.addEventListener("click", function() {
		newItem.remove();
	});

	newItem.appendChild(itemLabel);
	newItem.appendChild(deleteButton);

	list.appendChild(newItem);
	itemInput.value = "";
});
