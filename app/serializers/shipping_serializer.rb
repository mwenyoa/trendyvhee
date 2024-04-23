class ShippingSerializer < ActiveModel::Serializer
  attributes %i[id order_id address shipping_date tracking_number created_at]
  # association
   has_one: Order
end
