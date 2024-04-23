class Category < ApplicationRecord
    # relationship with products
    has_many :products
    has_one_attached :photo
    # validation

    validates :photo, presence: true
    validates :category_name, uniqueness: true,  presence: true, length: { minimum: 3, maximum: 50 }
    validates :description, presence: true, length: { minimum: 10, maximum: 500 }
end
