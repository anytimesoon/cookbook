# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Recipe.create(name: 'Yummy Cheese on Toast', method: "Really easy steps", introduction: "You need to try this!!!")

Ingredient.create(name: 'Cheese', qty: '150g', calories: 300, protein: 100, fat: 200, carb: 20)