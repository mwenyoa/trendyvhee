class AddMetadataToActiveStorageBlobs < ActiveRecord::Migration[7.0]
  def change
    add_column :active_storage_blobs, :width, :integer
    add_column :active_storage_blobs, :height, :integer
  end
end
