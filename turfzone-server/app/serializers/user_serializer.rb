class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :phone_number

  has_many :bookings, include: :turf
  has_many :turves
end
