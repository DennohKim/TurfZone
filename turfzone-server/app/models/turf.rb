class Turf < ApplicationRecord
    has_many :bookings
    has_many :users, through: :bookings
end
