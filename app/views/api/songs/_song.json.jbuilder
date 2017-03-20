json.extract! song, :title, :album_id, :track_number
json.clip asset_path(song.clip.url)
