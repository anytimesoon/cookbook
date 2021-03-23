$(document).foundation();

document.addEventListener('DOMContentLoaded', function(){
	getRecipes();
});

function getRecipes(){
	fetch('http://localhost:3000/recipes')
		// Handle success
	    .then(response => response.json())  // convert to json
	    .then(json => index(json, document.querySelector("#recipes-index").innerHTML))    //print data to console
	    .catch(err => console.log('Request Failed', err)); // Catch errors	
};

function getIngredients(){
	fetch('http://localhost:3000/ingredients')
		// Handle success
	    .then(response => response.json())  // convert to json
	    .then(json => index(json, document.querySelector("#ingredients-index").innerHTML))    //print data to console
	    .catch(err => console.log('Request Failed', err)); // Catch errors	
}

function index(json, source){
  // compile it using Handlebars
  const template = Handlebars.compile(source);
  let html = "";

  for (let i = 0; i < json.data.length; i++){
	  // get the HTML after passing the template the context
	  html += template(json.data[i]);
	};
  // get the element to set the new HTML into
  const destination = document.querySelector("#content");
  // set the new HTML
  destination.innerHTML = html;

  bindShowLinks()
};

function show(json, source){
  // compile it using Handlebars
  const template = Handlebars.compile(source);

	  // get the HTML after passing the template the context
	const  html = template(json.data);
  // get the element to set the new HTML into
  const destination = document.querySelector("#content");

  // set the new HTML
  destination.innerHTML = html;
};

function bindShowLinks(){
	const elements = document.getElementsByClassName("show-recipe");

	const myFunction = function() {
	    const id = this.getAttribute("id");
	    fetch('http://localhost:3000/recipes/' + id)
		// Handle success
		    .then(response => response.json())  // convert to json
		    .then(json => show(json, document.querySelector("#show-recipe").innerHTML))    //print data to console 
		    .catch(err => console.log('Request Failed', err)); // Catch errors	
	};

	for (let i = 0; i < elements.length; i++) {
	    elements[i].addEventListener('click', myFunction, false);
	}
}

document.querySelector("#recipes").addEventListener('click', function(){
	getRecipes();
	$('#nav-menu').foundation('close');
});

document.querySelector("#ingredients").addEventListener('click', function(){
	getIngredients();
	$('#nav-menu').foundation('close');
});