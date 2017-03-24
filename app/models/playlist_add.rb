class PlaylistAdd < ApplicationRecord
  validates_presence_of :playlist, :song
  
  belongs_to :playlist
  belongs_to :song
end
