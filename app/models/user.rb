class User < ApplicationRecord
  devise :database_authenticatable,
         :jwt_authenticatable,
         :registerable,
         :confirmable,
         :recoverable,
         :omniauthable,
         omniauth_providers: [:facebook],
         jwt_revocation_strategy: JwtDenylist
  # Relationships
  has_one_attached :photo
  has_many :orders
  has_many :reviews 
  has_many :payments
  # has_secure_password
  # validations
  validates :firstname,  presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :phoneno, presence: true, uniqueness: true
  validates :email, format: { with: Devise.email_regexp }, uniqueness: true

  scope :update_user_role, ->(user_id) { where(id: user_id).update(role: 'customer') }

  def generate_jwt
    payload = { user_id: id }
    expiration_time = 60.days.from_now.to_i
    JWT.encode payload.merge(exp: expiration_time), Rails.application.secrets.secret_key_base
  end

  def self.signin_or_create_from_provider(provider_data)
    where(provider: provider_data[:provider], uid: provider_data[:uid]).first_or_create do |user|
      user.name = provider_data[:info][:name]
      user.password = Devise.friendly_token[0, 20]
      user.skip_confirmation!
    end
  end

  def is_admin
    role == 'admin'
  end
end
