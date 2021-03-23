class RecipeIngredientSerializer
  include JSONAPI::Serializer
  attributes :qty
  belongs_to :recipe
  belongs_to :ingredient
end