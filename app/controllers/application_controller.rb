class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  prepend_before_action :require_no_authentication, only: :cancel
  helper_method :profile_complete, :user_role, :login?

  def profile_complete
    current_user&.is_complete
  end

  def user_role
    current_user&.role == 'customer'
  end

  def login?
    current_user.present?
  end
end
