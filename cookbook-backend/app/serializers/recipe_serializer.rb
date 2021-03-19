class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name
  has_and_belongs_to_many :ingredients
end
