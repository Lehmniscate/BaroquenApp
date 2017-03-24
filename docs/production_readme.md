# Baroquen
[Baroquen Live][heroku]

[heroku]: https://baroquen.audio

Baroquen is a web application based on Spotify's web player. It is structured with Ruby on Rails as the backend, a PostgreSQL database, and React/Redux fronted framework.

##Features and Implementation

### Music Playing

Songs are stored with relations to their Albums and Artists. The paperclip gem is used to associate the music files to the songs, and store the files on Amazon web services for content delivery. 

The songs are played within the bottom bar, and the play queue is stored seperately in the redux store. React-Player is used to handle the streaming and playing of music. The libary allows easy seeking and custom displaying of the progress of the music being played as well as starting the next song on completion of previous song.

### Playlists

Playlists are structured with a join table to associate songs to the playlist. Creating a new playlist opens a modal to allow the user to input a name for the playlist. Adding a song to playlists also opens a modal to allow the user to select which playlist to add the song to. 
