class TurfSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :location, :rates, :description, :manager_name, :manager_email, :manager_number
  
end
