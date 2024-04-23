class Api::V1::ProductsController < ApplicationController

  before_action :set_product, only: [:update, :destroy, :show]

  def index
    @products = Product.includes(:reviews, :promotions, :images_attachments).order(created_at: :desc)
    if @products.any?
      render json: @products, status: 200
    else
      render json: { error: "No products found in this category" }, status: 404
    end
  end

  def show
    render_product_json(@single_product)
  end
  def create
    @product = Product.new(product_params.except(:images))
      images = params[:product][:images]
      images.each do |image|
        @product.images.attach(image)
      end
      save_and_render_json(@product, 201)
  end
  

  def update
    @product.update_and_render_json(product_params, 200)
  end

  def destroy
    @del_product = @product.id
    render_destroy_json(@product.destroy, @del_product)
  end

  private

  def set_category
    @category = Category.find(product_params[:category_id])
  end

  def set_product
    @single_product = Product.includes(:reviews, :promotions, :images_attachments).find(params[:id])
  end

  def product_params
    params.require(:product).permit(:product_name, :description, :price, :quantity, :manufacturer, :category_id, images: [])
  end
  
  

  def render_product_json(product)
    if product
      render json: product, status: 200
    else
      render json: { error: "Product not found" }, status: 404
    end
  end

  def save_and_render_json(record, status)
    if record.save
      render json: record, status: status
    else
      render json: { error: record.errors.full_messages.to_sentence }, status: 422
    end
  end

  def render_destroy_json(success, del_product)
    if success
      render json: { data: del_product }, status: 204
    else
      render json: { error: "Unable to delete product" }, status: 422
    end
  end
end
