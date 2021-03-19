$(document).foundation();

document.addEventListener('DOMContentLoaded', function(){
	fetch('http://localhost:3000/recipes')
		// Handle success
	    .then(response => response.json())  // convert to json
	    .then(json => recipeIndex(json))    //print data to console
	    .catch(err => console.log('Request Failed', err)); // Catch errors
})

function recipeIndex(json){
	const source = document.querySelector("#recipes").innerHTML;

  // compile it using Handlebars
  const template = Handlebars.compile(source);
  let html = "";

  for (let i = 0; i < json.data.length; i++){

	  // get the HTML after passing the template the context
	  html += template(json.data[i]);

	};
  // debugger;
  // get the element to set the new HTML into
  const destination = document.querySelector("#content");

  // set the new HTML
  destination.innerHTML = html;
}