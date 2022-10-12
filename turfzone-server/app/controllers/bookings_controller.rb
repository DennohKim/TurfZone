class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        bookings = Booking.all
        render json: bookings, status: :ok
    end

    def create
        booking = booking.create!(booking_params)
        render json: booking, status: :created
    end
    
    private
    
    def booking_params
        params.permit(:start_time, :end_time, :user_id, :turf_id)
    end
      
      
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
