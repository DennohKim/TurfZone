class User < ApplicationRecord
    has_secure_password
    
    has_many :bookings
    has_many :turves, through: :bookings

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
end
