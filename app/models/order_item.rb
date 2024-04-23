class OrderItem < ApplicationRecord
  belongs_to :Product
  belongs_to :Order
  # validation
  validates :product_id, :order_id, :quantity, presence: true, numericality: { only_integer: true }
  validates :unit_price, presence: true, numericality: { only_float: true }
end
