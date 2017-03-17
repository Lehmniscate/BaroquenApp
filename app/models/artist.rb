class Artist < ApplicationRecord
  validates :name, uniqueness: true, presence: true

  has_attached_file :image, default_url: "https://s3.amazonaws.com/baroquen-dev/default_avatar.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :albums
  has_many :songs, through: :albums, source: :songs
end
