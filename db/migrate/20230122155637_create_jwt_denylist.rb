class CreateJwtDenylist < ActiveRecord::Migration[7.0]
  def change
    create_table "jwt_denylist", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
    end
    add_index :jwt_denylist, :jti
  end
end
