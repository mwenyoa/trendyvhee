class ReviewSerializer < ActiveModel::Serializer
  attributes %i[id user_id product_id rating review_text review_date created_at]
  # associations
   belongs_to: User 
   belongs_to: Prodduct
end
