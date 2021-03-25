$(document).foundation();

let recipes = null;
let ingredients = null;

// Define the Recipes constructor
class RecipesConstructor {
	constructor(json){
		this.template = document.querySelector("#recipes-index").innerHTML;
		this.recipeArr = json.data;
		this.json = json;

		this.index;
		this.bindShowLinks;
	}

	set ingredients(hash){
		this.ingredients = hash
	}

	get index(){
		index(this, this.template);
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
};


// Define the Ingredients Constructor
class IngredientsConstructor {
	constructor(json){
		this.template = document.querySelector("#ingredients-index").innerHTML
		this.list = json
	}

	get index(){
		index(this, this.template)
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
		index(this, this.template)
	}
};



function defineContent(json){
	recipes = new RecipesConstructor(json);
	
	let ingredientsArr = []
	for (let i = 0; i < json.included.length; i++){
	  if (json.included[i].type == "ingredient") {
	    ingredientsArr.push(json.included[i])
	  } else {
	    console.log('no');
	  }
	}
	ingredients = new IngredientsConstructor(ingredientsArr);
};

function index(data, template){
  // compile it using Handlebars
  const compiledTemplate = Handlebars.compile(template);

  let html = compiledTemplate(data);

  const destination = document.querySelector("#content");
  // set the new HTML
  destination.innerHTML = html;

  let elem = new Foundation.Accordion($('#form-accordion'));
};


// Event Listeners
document.addEventListener('DOMContentLoaded', function(){
	fetch('http://localhost:3000/recipes')
		// Handle success
	    .then(response => response.json())  // convert to json
	    .then(json => defineContent(json) ) // send json to function so new recipes constructor can be saved to variable
	    .catch(err => console.log('Request Failed', err)); // Catch errors	
});

document.querySelector("#recipes").addEventListener('click', function(){
	recipes.index;
	$('#nav-menu').foundation('close');
});

document.querySelector("#ingredients").addEventListener('click', function(){
	ingredients.index;
	$('#nav-menu').foundation('close');
});