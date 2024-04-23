class CreateShippings < ActiveRecord::Migration[7.0]
  def change
    create_table "shippings", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.string :zip_code
      t.date :shipping_date
      t.string :trancking_number
      t.references :order, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
