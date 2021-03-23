class IngredientSerializer
  include JSONAPI::Serializer
  attributes :name, :calories, :protein, :fat, :carb
  has_many :recipes
  has_many :recipe_ingredients
end
