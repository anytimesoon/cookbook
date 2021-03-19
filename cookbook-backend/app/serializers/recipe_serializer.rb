class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name
  has_many :ingredients
end
