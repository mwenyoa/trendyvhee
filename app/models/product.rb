class Product < ApplicationRecord
  # relationships
  belongs_to :category
  has_many :order_items
  has_many :reviews
  has_many :promotions
  has_many_attached :images

  # validations
  validates :quantity, presence: true, numericality: { only_integer: true }
  validates :product_name, :manufacturer, presence: true, length: { minimum: 3, maximum: 50 }
  validates :description, presence: true, length: { minimum: 10, maximum: 500 }
  validates :price, presence: true, numericality: { only_float: true }

  validate :validate_at_least_one_image

  def validate_at_least_one_image
    errors.add(:images, "should have at least one attached image") unless images.attached? && images.count >= 1
  end
end
