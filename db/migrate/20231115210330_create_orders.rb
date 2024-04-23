class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table "orders", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :order_date
      t.float :total_amount
      t.string :status
      t.references :user, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
