class RecipeSerializer
  include JSONAPI::Serializer
  attributes :name, :method, :introduction
  has_many :ingredients
end
