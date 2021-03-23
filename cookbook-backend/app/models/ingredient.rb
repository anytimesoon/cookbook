class Ingredient < ApplicationRecord
	has_many :recipe_ingredients
	has_many :recipes, through: :recipe_ingredients

	validates_presence_of :name, :calories, :protein, :fat, :carb

	def qty(recipe)
		self.recipe_ingredients.where(recipe_id: recipe.id).first.qty
	end
end
