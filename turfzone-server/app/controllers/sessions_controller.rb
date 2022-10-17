class SessionsController < ApplicationController

    # skip_before_action :authorize, only: :create
    
    #Log in a user
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    # Log out a user
    def destroy 
        if session[:user_id]
            session.delete :user_id
            head :no_content
        else
            render json: {errors: ["You have been logged in  to log out"] }, status: :unauthorized
        end
    end
end
