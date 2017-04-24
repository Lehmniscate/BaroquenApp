namespace :seed_cleaning do
  desc "Reset demo user's playlists"
  task playlists: :environment do
    User.first.playlists.destroy_all
    songs = Song.all
    songs = songs.shuffle

    playlists = [
      Playlist.create!(title: "After Dinner", user_id: User.first.id),
      Playlist.create!(title: "Morning Routine", user_id: User.first.id),
      Playlist.create!(title: "Worktime", user_id: User.first.id),
      Playlist.create!(title: "Relaxing", user_id: User.first.id),
      Playlist.create!(title: "Motivation", user_id: User.first.id)
    ]

    0.upto(playlists.length - 1) do |i|
      (i * 20).upto(i * 20 + 19) do |j|
        playlists[i].add_song songs[j]
      end
    end
  end
end
