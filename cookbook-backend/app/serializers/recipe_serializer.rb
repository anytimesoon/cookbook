class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name
  has_many :ingredients
  belongs_to :ingredients
end
