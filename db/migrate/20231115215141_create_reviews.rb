class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table "reviews", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.integer :rating
      t.string :review_text
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :product, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
