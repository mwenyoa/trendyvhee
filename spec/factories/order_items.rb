FactoryBot.define do
  factory :order_item do
    unit_price { 1.5 }
    quantity { 1 }
    Product { nil }
    Order { nil }
  end
end
