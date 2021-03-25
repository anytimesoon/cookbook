class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    options = { include: [:ingredients, :recipe_ingredients] }
    render json: RecipeSerializer.new(recipes, options).serializable_hash
  end

  def show
    recipe = Recipe.first

    render json: RecipeSerializer.new(recipe).serializable_hash
  end

  def new
  end

  def create
    binding.pry
  end

  def update
  end
end
