class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table "categories", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :category_name
      t.string :description

      t.timestamps
    end
  end
end
