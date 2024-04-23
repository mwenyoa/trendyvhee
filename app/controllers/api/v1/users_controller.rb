class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :require_admin, only: [:index, :destroy]

  def index
    @users = User.includes(%i[reviews  payments orders photo_attachment]).order('created_at DESC')
    if @users
      render json: @users, status: 200
    else
      render json: { error: 'No users found' }, status: 404
    end
  end

  def show
    @user = User.includes(%i[reviews payments orders photo_attachment]).find(params[:id])
    if @user
      render json: @user, status: 200
    else
      render json: { error: 'User not found' }, status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    @user.is_complete = true
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: { message: 'User deleted succesfully' }, status: 200
    else
      render json: { error: @user.errors.full_messages.to_sentence }, status: 422
    end
  end

  def get_user
    user = Rails.cache.fetch("current_user", expires_in: 1.hour) do
      current_user
    end
    render json: user, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :email, :password, :phoneno, :facebook_link, :role, :photo)
  end

  def require_admin
    render json: { error: "Unauthorized action!" }, status: :unauthorized unless current_user&.is_admin
  end
end
