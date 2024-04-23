class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category_id, :created_at, :product_name, :description, :price, :quantity, :manufacturer, :size, :images

  # associations
  belongs_to :category
  has_many :reviews

  def images
    return unless object.images.attached?

    object.images.map do |img|
      Rails.application.routes.url_helpers.rails_blob_url(img, only_path: true)
    end
  end
end
