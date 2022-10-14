class UsersController < ApplicationController
  # skip_before_action :authorize, only: [:create, :update, :delete]

  def index
    users = User.all
    render json: users, Serializer: BookingTurvesSerializer, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  # signing up a user

  # def create
  #   # byebug
  #   user = User.new(user_params)
  #   if user.valid? && params[:password] == params[:password_confirmation]
  #     user.save!
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   else
  #     render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  # # Auto login a user if they refresh page
  # def show
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #     render json: user
  #   else
  #     render json: { error: "Not authorized" }, status: :unauthorized
  #   end
  # end

  # def show
  #     user = User.find(params[:id])
  #     if user
  #       render json: user
  #     else
  #       render json: { error: "user not found" }, status: :not_found
  #     end
  # end

  private

  def user_params
    params.permit(:username, :email, :phone_number, :password, :password_confirmation)
  end
end
