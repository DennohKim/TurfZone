class UsersController < ApplicationController
    def index
        users = User.all
        render json: users, status: :ok
    end

    #signing up a user
    def create
        # byebug
        user = User.new(user_params)
        if user.valid? && params[:password] == params[:password_confirmation]
          user.save!
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #Auto login a user if they refresh page
    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end 

    private

    def user_params
        params.permit(:username, :email, :phone_number, :password, :password_confirmation)
    end
end
