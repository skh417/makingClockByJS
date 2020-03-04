

const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
	title.classList.toggle(CLICKED_CLASS);
}

	
function init(){
	title.addEventListener("click", handleClick);		
}
init();

// title.addEventListener("click", handleClick);


















/*
const age = prompt("How old are you?");

if(age >= 19 && age <= 21){
	console.log('You only can drink one bottle');
} else if(age > 21){
	console.log('Go ahead!');
} else {
	console.log('You are too young!');
}
*/

