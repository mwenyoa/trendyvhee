class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table "payments", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.date :payment_date
      t.string :payment_method
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :order, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
