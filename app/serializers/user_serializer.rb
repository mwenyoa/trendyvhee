class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes %i[id firstname lastname phoneno email facebook_link role photo]
  # Associations
  has_many :orders
  has_many :reviews 
  has_many :payments 
   
  def photo
    rails_blob_path(object.photo, only_path: true) if object.photo.attached?
  end
end
