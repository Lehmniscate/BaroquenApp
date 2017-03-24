class CreatePlaylistAdds < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_adds do |t|
      t.integer :song_id, null: false
      t.integer :song_position, null: false
      t.integer :playlist_id, null: false

      t.timestamps
    end
    add_index :playlist_adds, :song_id
    add_index :playlist_adds, :playlist_id
  end
end
