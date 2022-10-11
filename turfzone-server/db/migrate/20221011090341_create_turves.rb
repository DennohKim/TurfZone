class CreateTurves < ActiveRecord::Migration[7.0]
  def change
    create_table :turves do |t|
      t.string :image_url
      t.string :name
      t.string :location
      t.integer :rates
      t.text :description
      t.string :manager_name
      t.string :manager_email
      t.string :manager_number

      t.timestamps
    end
  end
end
