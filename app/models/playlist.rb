class Playlist < ApplicationRecord
  validates_presence_of :title, :user

  has_attached_file :image, default_url: "https://s3.amazonaws.com/baroquen-dev/default_image.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :user
  has_many :playlist_adds
  has_many :songs, through: :playlist_adds, source: :song

  has_many :follows, as: :followed

  def image_url=(url)
    self.image = URI.parse(url).open
  end

  def list
    playlist_items = self.playlist_adds.sort_by(&:song_position)
    songs = {};
    self.songs.each {|s| songs[s.id] = s}
    playlist_items.map { |el| songs[el.song_id] }
  end

  def add_song song
    last_song_pos = self.playlist_adds.pluck(:song_position).max || 1
    PlaylistAdd.create(playlist_id: self.id, song_id: song.id, song_position: (last_song_pos + 1))
  end
  
  def remove_song list_idx
    playlist_items = playlist_adds.sort_by(&:song_position)
    PlaylistAdd.destroy(playlist_items[list_idx])
  end

  accepts_nested_attributes_for :songs
end
