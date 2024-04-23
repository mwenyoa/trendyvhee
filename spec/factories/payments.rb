FactoryBot.define do
  factory :payment do
    payment_date { "2023-11-17" }
    payment_method { "MyString" }
    User { nil }
    Order { nil }
  end
end
