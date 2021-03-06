const animals = ["Bird", "Dog", "Cat", "Lion", "Rat", "Tiger", "Crocodile", "Goldfish", "Cow", "Chicken", "Goat", "Sheep", "Monkey", "Fly", "Bee", "Butterfly", "Ant"];
const links = ["is in", "is at", "is on", "is under", "is below", "is next to", "is beside", "is over", "is above", "is accros", "is on top of", "is on the corner of", "is next to","is between","is at the end of","is in front of","is on the left of","is on the right of","is behind", "go trough", "go to", "go into", "go towards", "go onto", "went from"];
const locations = ["the branch", "the kitchen", "the book", "the living room", "the toilet", "the tree", "its nest"];

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'grey', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'yellow'];

const createSentence = () => {
	let animal = animals[Math.floor(Math.random() * animals.length)];
	let link = links[Math.floor(Math.random() * links.length)];
	let location = locations[Math.floor(Math.random() * locations.length)];
	let sentenceContainer = document.getElementById("sentence-container");
	sentenceContainer.innerHTML += `<h1 class="sentence">The ${animal} ${link} ${location}.<br>I repeat, the ${animal} ${link} ${location}.*</h1>`;
}

const changeBackgroundColor = () => {
	const mainContainer = document.getElementById("sentence-container");
	const instruction = document.getElementById("instruction");
	const color = colors[Math.floor(Math.random() * colors.length)];
	mainContainer.style.backgroundColor = color;
	instruction.style.backgroundColor = color;
}

const resetAndCreateSentence = () => {
	const element = document.getElementsByClassName("sentence");
	if (element.length > 0) {
		element[0].remove();
	}
	createSentence();
	changeBackgroundColor();
}


window.onload = () => {
	createSentence();
	changeBackgroundColor();
}

window.addEventListener('keypress', resetAndCreateSentence);
