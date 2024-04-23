class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: %i[show update destroy]

  def index
    @reviews = Review.includes(:user, :product).order(created_at: :desc)
    if @reviews 
      render json: @reviews, status: 200
    else
      render json: { error: @reviews.errors.full_messages.to_sentence }, status: 404
    end
  end

  def show
    @single_review = Review.includes(:user, :product).where(id: @review.id)
    if @single_review
      render json: @single_review, status: 200
    else 
       render json: { error: "Review not found" }, status: 404
    end
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: 200
    else
      render json: { error: @review.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update 
    @updated_review = @review.update(review_params)
    if @updated_review 
      render json: @updated_review, status: 200
    else
      render json: { error: @updated_review.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    @deleted_review = @review.id
    if @review.destroy
      render json: { data: @deleted_review }, status: 200
    else
      render json: { error: @review.errors.full_messages.to_sentence }, 422
    end
  end

  private

  def set_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(%i[user_id product_id review_text rating])
  end
end
