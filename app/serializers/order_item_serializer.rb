class OrderItemSerializer < ActiveModel::Serializer
  attributes %i[id product_id order_id quantity unit_price created_at]
  # assoctions
   belongs_to: Order
end
