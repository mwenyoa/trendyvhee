FactoryBot.define do
  factory :order do
    order_date { "MyString" }
    total_amount { 1.5 }
    status { "MyString" }
    User { nil }
  end
end
