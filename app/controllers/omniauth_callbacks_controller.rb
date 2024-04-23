class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  respond_to :json
  
    def facebook
      @user = User.signin_or_create_from_provider(params)
      if @user.persisted?
        sign_in(@user)
        
        login_token = @user.generate_jwt
        render json: login_token, status: :created
      else
        render json: {
          status: 'FAILURE',
          message: "There was a problem signing you in through #{params[:provider]}",
          data: @user.errors
        },
               status: :unprocessable_entity
      end
    end
end
  