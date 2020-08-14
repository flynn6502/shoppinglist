// Made with love by FlynnK12

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("x"));
	li.appendChild(button);
	button.onclick=removeItem;
	
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	}
}

function markAsDone(item) {
    if (item.target.tagName === "LI") {
        item.target.classList.toggle("done");
    }
}

function removeItem(item){
	item.target.parentNode.remove();
} 

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", markAsDone);





