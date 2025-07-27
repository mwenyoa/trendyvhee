class Review < ApplicationRecord
  belongs_to :user
  belongs_to :product

  # validation
  validates :user_id, :product_id, presence: true
  validates :review_text, presence: true, length: { minimum:5, maximum: 100 }
  validates :rating, inclusion: { in: 1..5 }, presence: true, numericality: { only_integer: true }
end
