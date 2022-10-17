class Turf < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :users, through: :bookings
end
