class ApplicationController < ActionController::Base
  include ActionController::Cookies
  protect_from_forgery unless: -> { request.format.json? }

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  # def encode_token(payload)
  #   JWT.encode(payload, "secret")
  # end

  # def decode_token
  #   auth_header = request.headers["Authorization"]

  #   if auth_header
  #     token = auth_header.split(" ")[1]
  #     begin
  #       JWT.decode(token, "secret", true, algorithm: "HS256")
  #     rescue JWT::DecodeError
  #       nil
  #     end
  #   end
  # end

  # def authorised_user
  #   decoded_token = decode_token()
  #   if decoded_token
  #     user_id = decoded_token[0]["id"]
  #     user = User.find_by(id: user_id)
  #   end
  # end

  # def authorize
  #   render json: { message: "Unauthorized" }, status: :unauthorized unless
  #     authorised_user
  # end
end
