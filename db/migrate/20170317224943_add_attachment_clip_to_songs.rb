class AddAttachmentClipToSongs < ActiveRecord::Migration
  def self.up
    change_table :songs do |t|
      t.attachment :clip
    end
  end

  def self.down
    remove_attachment :songs, :clip
  end
end
