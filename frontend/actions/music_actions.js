import * as APIUtil from '../util/music_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const DELETE_PLAYLIST = "DELETE_PLAYIST";

export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receivePlaylists = playlists => ({
  type: RECEIVE_PLAYLISTS,
  playlists
});

export const removePlaylist = playlist => ({
  type: DELETE_PLAYLIST,
  playlist
});

export const fetchSong = id => dispatch => {
  APIUtil.receiveSong(id)
    .then(song => {
      dispatch(receiveSongs([song]));
      return song;
    }).then(song => (
      APIUtil.receiveAlbum(song.album_id)
        .then(album => {
          dispatch(receiveAlbums([album]));
          APIUtil.receiveArtist(album.artist_id).then(artist => dispatch(receiveArtists([artist])));
        })
    ));
};
export const fetchArtist = id => dispatch => {
  APIUtil.receiveArtist(id)
    .then(artist => dispatch(receiveArtists([artist])));
  return APIUtil.receiveAlbums(id)
    .then(albums => dispatch(receiveAlbums(albums)));
};

export const fetchAlbum = id => dispatch => {
  APIUtil.receiveAlbum(id)
    .then(album => { dispatch(receiveAlbums([album])); return album;})
    .then(album => { APIUtil.receiveArtist(album.artist_id).then(artist => dispatch(receiveArtists([artist])));});
  return APIUtil.receiveSongs(id)
    .then(songs => dispatch(receiveSongs(songs)));
};


export const fetchArtists = () => dispatch => {
  APIUtil.receiveArtists()
    .then(artist => dispatch(receiveArtists(artist)));
};


export const fetchPlaylist = id => dispatch => {
  return APIUtil.receivePlaylist(id)
    .then(playlist => { 
      dispatch(receivePlaylists([playlist]));
      playlist.songs.forEach(song => dispatch(fetchSong(song)));})
};

export const fetchPlaylists = () => dispatch => {
  return APIUtil.receivePlaylists()
    .then(playlists => dispatch(receivePlaylists(playlists)));
};

export const createPlaylist = playlist => dispatch => {
  return APIUtil.createPlaylist(playlist)
    .then(playlist => {
      dispatch(receivePlaylists([playlist]));
      return playlist;
    });
};

export const updatePlaylist = playlist => dispatch => {
  return APIUtil.updatePlaylist(playlist)
    .then(playlist => dispatch(receivePlaylists([playlist])));
};

export const deletePlaylist = playlist => dispatch => {
  return APIUtil.deletePlaylist(playlist.id)
    .then(p => dispatch(removePlaylist(playlist)));
};
