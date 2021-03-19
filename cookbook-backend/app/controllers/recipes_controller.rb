class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes)
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: RecipeSerializer.new(recipe)
  end

  def new
  end

  def create
  end

  def update
  end
end
