class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name, :method, :introduction

  attribute :ingredients_with_qty do |recipe|
  	recipe.ingredients.map do |ingredient|
  		"#{ingredient.qty(recipe)} #{ingredient.name}"
  	end
  end

  has_many :ingredients
  has_many :recipe_ingredients
end
