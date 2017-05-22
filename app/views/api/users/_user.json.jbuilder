json.extract! user, :id, :username, :followed_playlists, :followed_users, :followed_albums, :followed_songs
json.image_url asset_path(user.avatar.url)

