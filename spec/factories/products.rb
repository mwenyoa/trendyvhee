FactoryBot.define do
  factory :product do
    product_name { "MyString" }
    description { "MyString" }
    price { 1.5 }
    quantity { 1 }
    manufacturer { "MyString" }
    size { "MyString" }
    Category { nil }
  end
end
