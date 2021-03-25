$(document).foundation();

// initialize constructor variable
// let recipes = null; 

// Define the Recipes constructor
class RecipesConstructor {
	constructor(json){
		this.template = document.querySelector("#recipes-index").innerHTML;
		this.recipeArr = json.data;
		this.ingredients = new IngredientsConstructor(json.included);
		this.json = json;

		index(this.recipeArr, this.template);
		this.bindShowLinks;
	}

	get bindShowLinks(){
		const elements = document.getElementsByClassName("show-recipe");

		const stuff = this.recipeArr;

		for (let i = 0; i < elements.length; i++) {
		    elements[i].addEventListener('click', function(){
					    	const id = this.getAttribute("id");

			    	    for (let i = 0; i < stuff.length; i++){
						    	if (stuff[i].id == id) {
						    		let currentRecipe = new RecipeConstructor(  stuff[i].attributes.name,
						    																								stuff[i].attributes.introduction,
						    																								stuff[i].attributes.ingredients_with_qty,
						    																								stuff[i].attributes.method
						    																							);
						    		currentRecipe.index;
						    	};
						    };

		    }, true);
		};
	};

	findRecipe(element, arr){
		


	}
};


// Define the Ingredients Constructor
class IngredientsConstructor {
	constructor(json){
		this.template = document.querySelector("#ingredients-index").innerHTML
		this.list = json
	}

	ingredientsIndex(){
		index(this.list, this.template)
	};
};

// Define a recipe
class RecipeConstructor {
	constructor(name, introduction, ingredients, method) {
		this.template = document.querySelector("#show-recipe").innerHTML;
		this.name = name;
		this.introduction = introduction;
		this.ingredients = ingredients;
		this.method = method;
	};

	get index(){
		index([this], this.template)
	}
};



document.addEventListener('DOMContentLoaded', function(){
	fetch('http://localhost:3000/recipes')
		// Handle success
	    .then(response => response.json())  // convert to json
	    .then(json => defineRecipes(json) ) // send json to function so new recipes constructor can be saved to variable
	    .catch(err => console.log('Request Failed', err)); // Catch errors	
});

function defineRecipes(json){
	const recipes = new RecipesConstructor(json);
};

function index(data, template){
  // compile it using Handlebars
  const compiledTemplate = Handlebars.compile(template);
  let html = "";

  for (let i = 0; i < data.length; i++){
	  // get the HTML after passing the template the context
	  html += compiledTemplate(data[i]);
	};  // get the element to set the new HTML into
  const destination = document.querySelector("#content");
  // set the new HTML
  destination.innerHTML = html;
};

function show(json, template){
  // compile it using Handlebars
  const compiledTemplate = Handlebars.compile(template);

  // define recipe
  recipe = new RecipeConstructor( json.data.attributes.name,
																	json.data.attributes.introduction,
																	json.data.attributes.ingredients_with_qty,
																	json.data.attributes.method
																	); 
  // get the HTML after passing the template the context
	const  html = compiledTemplate(recipe);
  // get the element to set the new HTML into
  const destination = document.querySelector("#content");

	// set the new HTML
  destination.innerHTML = html;
};

document.querySelector("#recipes").addEventListener('click', function(){
	recipes.index();
	$('#nav-menu').foundation('close');
});

document.querySelector("#ingredients").addEventListener('click', function(){
	recipes.ingredients.index();
	$('#nav-menu').foundation('close');
});