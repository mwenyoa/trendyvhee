class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table "order_items", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.float :unit_price
      t.integer :quantity
      t.references :product, null: false, foreign_key: true, type: :uuid
      t.references :order, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
