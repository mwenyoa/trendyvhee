class Api::V1::ShippingsController < ApplicationController
  before_action :set_shipper, only: %i[show update destroy]
  before_action :set_order, only: %i[create update destroy]

  def index
    @shippings = Shipping.includes(:order).order(created_at: :desc)
    if @shippings
      render json: @shippings, json: 200
    else
      render json: { error: "No shipping informations found" }, 404
    end
  end

  def show
    if @shipper
      render json: @shipper, json: 200
    else
      render json: { error: "No shipping information found " }, status: 404
    end
  end

  def create
    @my_order = @Order.shipping.new(shipping_params)
    if @my_order.save
      render json: @my_order, status: 201
    else
      render json: { error: @my_order.errors.full_messages.to_sentence }, status: 422
    end
  end

  def update
    @updated = @Order.@shipper.update(shipping_params)
    if @updated 
      render json: @updated, status: 200
    else
      render json: { error: @updated.errors.full_messages.to_sentence }, status: 422 
    end
  end

  def destroy
  end

  private

  def set_shipper 
    @shipper = Shipping.find(params[:id])
  end

  def set_order
    @Order = Order.find(params[:order_id])
  end

  def shipping_params
    params.require(:shipping).permit(%i[order_id address shipping_date tracking_number])
  end
end
