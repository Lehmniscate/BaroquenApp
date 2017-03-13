```js
{
  currentUser: {
    id: 1,
    username: "UserExample"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []}
  },
  songs: {
    1: {
      title: "example song 2",
      duration: 4:12,
      album_id: 2,
      url: "song 2 location url"
    },
    2: {
      title: "example song 1",
      duration: 2:35,
      album_id: 1,
      url: "song 1 location url"
    }
  },
  albums: {
    2: {
      title: "example album 1",
      songs: [1,3,4,5,6],
      album_art_url: "album 1 art url",
      artist_id: 4
    }
  },
  artists: {
    4: {
      name: "Artist",
      description: "amazing artist",
      artist_picture_url: "picture_url"
    }
  }
  playlists: {
    1: {
      title: "Sample Playlist",
      user_id: 1,
      songs: [1, 2]
    }
  },
  playqueue: {
    currentPosition: 1,
    songs: [1, 2]
  },
  results: {
    exampleQuery1: {
      albums: [2, 3]
    }
  }
}
```
