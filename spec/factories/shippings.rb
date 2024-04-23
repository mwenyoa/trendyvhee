FactoryBot.define do
  factory :shipping do
    address { "MyString" }
    shipping_date { "2023-11-16" }
    trancking_number { "MyString" }
    Order { nil }
  end
end
