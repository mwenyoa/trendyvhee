class PaymentSerializer < ActiveModel::Serializer
  attributes %i[id user_id order_id payment_date payment_method created_at] 
  # associations
  belongs_to: User
  belongs_to: Order

end
