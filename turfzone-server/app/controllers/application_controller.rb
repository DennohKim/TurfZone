class ApplicationController < ActionController::Base
    include ActionController::Cookies
    protect_from_forgery unless: -> { request.format.json? }
end
