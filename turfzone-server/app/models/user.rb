class User < ApplicationRecord
    has_secure_password

    has_many :bookings, dependent: :destroy
    has_many :turves, through: :bookings

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :password, presence: true, length: { in: 6..20 }
    validates :phone_number, presence: true
end
