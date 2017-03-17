class Album < ApplicationRecord
  validates_presence_of :title, :artist
  validates :title, unique: { scope: :artist_id, message: "cannot have duplicate albums per artist" }

  has_attached_file :image, default_url: "https://s3.amazonaws.com/baroquen-dev/default_avatar.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist
  has_many :songs
end
