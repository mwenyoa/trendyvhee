class Api::V1::PromotionsController < ApplicationController
  before_action :set_product
  before_action : set_promotion, only: %i[show update destroy]

  def index
    @promotions = @product.all
    if @promotions
       render json: @promotions, status: 200
    else
      render json: { error: "They are no promotions yet" }, status: 404
    end
  end

  def show
    if @promotion
        render json: @promotion, status: 200
    else
      render json: { error: "There is no promotion found" }, status: 404
    end
  end

  def create
    @promo = @product.new(promotionns_params)
     if @promo.save
        render json: @promo, status: 201
     else
        render json: { error: @promo.errors.full_messages.to_sentence }, status: 422
     end
  end

  def update
     if @promotion.update(promotionns_params)
        render json: @promotion, status: 200
     else
        render json: { error: @promotion.errors.full_messages.to_sentence }, status: 422
     end
  end

  def destroy
     @deleted_promo = @promotion.id
     if @promotion.destroy
       render json: { data: @deleted_promo }, status: 200
     else
       render json: { error: @promotion.errors.full_messages.to_sentence }, status: 422
     end
  end

  private

  def set_product
    @product = Product.find(params[:product_id])
  end

  def set_promotion
    @promotion = @product.find(params[:id])
  end

  def promotionns_params
    params.require(:promotions).permit(%i[price start_date end_date product_id])
  end
end
