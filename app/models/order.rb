class Order < ApplicationRecord
  belongs_to :User
  # relationship with order_items
  has_many :order_items
  # validation
  validates :user_id,  presence: true, numericality: { only_integer: true }
  validates :total_amount,    presence: true, numericality: { only_integer: true }
  validates :status, presence: true, inclusion: { in: %w(pending paid cancelled) }
  
end
