ActiveAdmin.register Turf do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :image_url, :name, :location, :rates, :description, :manager_name, :manager_email, :manager_number
  #
  # or
  #
  # permit_params do
  #   permitted = [:image_url, :name, :location, :rates, :description, :manager_name, :manager_email, :manager_number]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
