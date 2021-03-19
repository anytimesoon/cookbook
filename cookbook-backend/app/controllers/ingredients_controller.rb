class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all
    render json: IngredientSerializer.new(ingredients)
  end

  def show
  end

  def new
  end

  def create
  end

  def update
  end
end
