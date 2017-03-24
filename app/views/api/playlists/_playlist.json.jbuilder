json.id playlist.id
json.title playlist.title
json.user_id playlist.user_id
json.image_url playlist.image.url

json.songs playlist.list.map {|song| song.id}
