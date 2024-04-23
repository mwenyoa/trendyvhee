class Promotion < ApplicationRecord
  belongs_to :Product

  # validation
  validates :product_id, :price, presence: true, numericality: { only_integer: true }
  validates :price, inclusion: { in: 1..10000 }
  validates   :start_date, :end_date, presence: true

end
