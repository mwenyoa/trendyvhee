class CategorySerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes %i[id category_name description created_at photo]
  # associations
   has_many :products
   
  def photo
     rails_blob_path(object.photo, only_path:true) if object.photo.attached?
  end
end
