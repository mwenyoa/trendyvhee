class Shipping < ApplicationRecord
  belongs_to :Order
  # validation
  validates :order_id, :address, :city, :state, :country, :zip_code, presence: true
  validates :shipping_date, presence: true
  validates :tracking_number, presence: true, uniqueness: true


end
