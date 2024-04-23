class PromotionSerializer < ActiveModel::Serializer
  attributes %i[id product_id start_date end_date created_at]
  # associations
  belongs_to: Product
end
