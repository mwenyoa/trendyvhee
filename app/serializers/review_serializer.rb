class ReviewSerializer < ActiveModel::Serializer
  attributes %i[id user_id product_id rating review_text created_at]
  # associations
   belongs_to :user 
   belongs_to :product
end
