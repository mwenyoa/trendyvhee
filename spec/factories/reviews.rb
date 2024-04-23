FactoryBot.define do
  factory :review do
    rating { 1 }
    review_text { "MyString" }
    review_date { "2023-11-15" }
    User { nil }
    Product { nil }
  end
end
