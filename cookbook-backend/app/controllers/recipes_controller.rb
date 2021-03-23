class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes).serializable_hash
  end

  def show
    recipe = Recipe.first

    render json: RecipeSerializer.new(recipe).serializable_hash
  end

  def new
  end

  def create
  end

  def update
  end
end
