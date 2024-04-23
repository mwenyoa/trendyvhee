class Api::V1::CategoriesController < ApplicationController
  before_action :set_category, only: %i[update destroy]
  def index
     @categories = Category.includes(:products, :photo_attachment).order(created_at: :desc)
     if @categories
      render json:  @categories, status: 200
     else
         render json: {error: "No categories found"}, status: 404
     end
  end

  def show
      @category = Category.includes(:products, :photo_attachment).find(params[:id])
      if @category
      render json: @category, status: 200
      else
        render json: {error: "Category not found"}, status: 404
      end
  end

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: @category, status: 201
    else
      render json: { error: @category.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    if @category.update(user_params)
      render json: @category, status: 200
    else
       render json: { error: @category.errors.full_messages.to_sentence }, status: 422
    end

  end

  def destroy
     @deleted_category = @category.id
    if @category.destroy
      render json: { message: @deleted_category }, status: 200
    else
      render json: { error: @category.errors.full_messages.to_sentence }, status: 422
    end
  end

  private 
  
  def set_category
    @category = Category.find(params[:id])
  end

  # params
    def category_params
      params.require(:category).permit(%i[category_name description photo])
    end
end
