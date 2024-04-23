class Payment < ApplicationRecord
   # associations
  belongs_to :User
  belongs_to :Order
  # validations
   validates :payment_date, presence: true
   validates :payment_method, presence: true
   validates :order_id, :user_id, presence: true
 
    
end
