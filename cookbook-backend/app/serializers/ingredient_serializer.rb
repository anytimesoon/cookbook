class IngredientSerializer
  include JSONAPI::Serializer
  attributes :name, :calories, :protein, :fat, :carb
  has_and_belongs_to_many :recipes
end
