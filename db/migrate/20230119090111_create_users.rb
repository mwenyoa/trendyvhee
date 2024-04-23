class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table "users", id: :uuid, default: -> {"gen_random_uuid()"}, force: :cascade do |t|
      t.string :firstname
      t.string :lastname
      t.string :phoneno
      t.string :email
      t.string :password_digest
      t.string :facebook_link
      t.string :role, default: 'customer'

      t.timestamps
    end
  end
end
