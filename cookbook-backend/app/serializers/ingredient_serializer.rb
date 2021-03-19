class IngredientSerializer
  include JSONAPI::Serializer
  attributes :name, :calories, :protein, :fat, :carb
  has_many :recipes
end
