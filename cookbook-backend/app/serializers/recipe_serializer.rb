class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name, :method, :introduction
  has_many :ingredients
  has_many :recipe_ingredients
end
