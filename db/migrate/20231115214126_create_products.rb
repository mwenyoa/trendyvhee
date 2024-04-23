class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table "products", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :product_name
      t.string :description
      t.float :price
      t.integer :quantity
      t.string :manufacturer
      t.string :size
      t.references :category, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
