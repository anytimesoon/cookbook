class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes)
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
