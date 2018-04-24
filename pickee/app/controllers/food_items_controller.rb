class FoodItemsController < ApplicationController

  def create
  end

  def show
  end

  def index
    food_items = FoodItem.all
    render json: food_items
  end

end
