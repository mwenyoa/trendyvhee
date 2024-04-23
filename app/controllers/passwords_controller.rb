class PasswordsController < Devise::PasswordsController
  respond_to :json

    def create
      self.resource = resource_class.send_reset_password_instructions(resource_params)
      yield resource if block_given?
  
      if successfully_sent?(resource)
        render json: { message: "Checkout your inbox for reset instructions!" }, status: :created
      else
        render json: resource.errors.full_messages.to_sentence, status: :unprocessable_entity
      end
    end

    def edit
      if params[:reset_password_token]
        redirect_to "#{ENV['host']}/#/password-confirmation/#{params[:reset_password_token]}"
      end
    end

    def update
      self.resource = resource_class.reset_password_by_token(resource_params)
  
      if resource.errors.empty?
        resource.unlock_access! if unlockable?(resource)
        if resource.active_for_authentication?
          sign_in(resource_name, resource)
          render json: {message: "Account was successfully updated!"}, status: :updated
        else
          render json: {errors: "Invalid request!"}, status: :updated_not_active
        end
      else
        set_minimum_password_length
        render json: resource.errors.full_messages.to_sentence, status: 401
      end
    end
end
  