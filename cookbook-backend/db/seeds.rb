# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Recipe.create(name: 'Yummy Cheese on Toast', method: "Really easy steps", introduction: "You need to try this!!!")
# Recipe.create(name: 'Roast Potatoes', method: "Really easy steps", introduction: "Crispy on the outside, soft on the inside")
# Recipe.create(name: 'Creamy Pesto', method: "Really easy steps", introduction: "Omnomnomnomnomnomnomnom")

# Ingredient.create(name: 'Cheddar', calories: 300, protein: 30, fat: 50, carb: 20)
# Ingredient.create(name: 'Toast', calories: 400, protein: 10, fat: 10, carb: 80)
# Ingredient.create(name: 'Potatoes', calories: 250, protein: 20, fat: 30, carb: 50)
# Ingredient.create(name: 'Butter', calories: 500, protein: 10, fat: 90, carb: 0)
# Ingredient.create(name: 'Basil', calories: 20, protein: 30, fat: 0, carb: 70)
# Ingredient.create(name: 'Parmasan', calories: 300, protein: 30, fat: 50, carb: 20)
# Ingredient.create(name: 'Pine Nuts', calories: 300, protein: 45, fat: 45, carb: 10)


RecipeIngredient.create(recipe_id: 1, ingredient_id: 1, qty: '100g')
RecipeIngredient.create(recipe_id: 1, ingredient_id: 2, qty: '2 Slices')
RecipeIngredient.create(recipe_id: 2, ingredient_id: 3, qty: '500g')
RecipeIngredient.create(recipe_id: 2, ingredient_id: 4, qty: '50g')
RecipeIngredient.create(recipe_id: 1, ingredient_id: 4, qty: '10g')
RecipeIngredient.create(recipe_id: 3, ingredient_id: 5, qty: '250g')
RecipeIngredient.create(recipe_id: 3, ingredient_id: 6, qty: '100g')
RecipeIngredient.create(recipe_id: 3, ingredient_id: 7, qty: '50g')