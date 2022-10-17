class BookingSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :end_time, :user_id, :turf_id

  has_one :turf, dependent: :destroy
end
