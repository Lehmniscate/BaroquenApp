json.partial! "api/albums/album", album: @album
songs = @album.songs
songtracks = Array.new(songs.length) { 0 }
songs.each do |song|
  songtracks[song.track_number - 1] = song.id
end

json.songs songtracks
