class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user

      if @user.id == params[:user]

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
