class Song < ApplicationRecord
  validates_presence_of :title, :album, :track_number
  validates :track_number, uniqueness: { scope: :album , message: "no duplicate track numbers please" }

  has_attached_file :clip
  validates_attachment_content_type :clip, content_type: ['audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio']

  belongs_to :album
  has_one :artist, through: :album, source: :artist
end
