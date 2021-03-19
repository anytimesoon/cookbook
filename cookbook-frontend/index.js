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
};

document.querySelector("#recipes").addEventListener('click', function(){
	getRecipes();
	$('#nav-menu').foundation('close');
});

document.querySelector("#ingredients").addEventListener('click', function(){
	getIngredients();
	$('#nav-menu').foundation('close');
});