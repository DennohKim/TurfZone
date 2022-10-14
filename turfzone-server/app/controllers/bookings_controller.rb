class BookingsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    # skip_before_action :authorize, only: [:index, :create]

    def index
        bookings = Booking.all
        render json: bookings, Serializer: BookingTurvesSerializer, status: :ok
    end

    def create
        booking = Booking.create!(booking_params)
        render json: booking, status: :created
    end
    
    def destroy
        booking = find_booking
        booking.destroy
        head :no_content
    end

    private

    def find_booking
        Booking.find(params[:id])
    end
    
    def booking_params
        params.permit(:start_time, :end_time, :user_id, :turf_id)
    end
      
      
    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
