class CreatePromotions < ActiveRecord::Migration[7.0]
  def change
    create_table "promotions", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :price
      t.date  :start_date
      t.date :end_date
      t.references :product, null: false, foreign_key: true, type: :uuid
      t.timestamps
    end
  end
end
