class OrderSerializer < ActiveModel::Serializer
  attributes %[id user_id total_amount ceated_at status]
  # associations
  has_one: shipping_information
  has_many: order_items
  belongs_to: User
end
