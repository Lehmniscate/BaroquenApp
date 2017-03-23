import * as APIUtil from '../util/music_api_util'

export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ARTISTS = "RECEIVE_ARTISTS";

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

export const fetchSong = id => dispatch => (
  APIUtil.receiveSong(id)
    .then(song => dispatch(receiveSongs([song])))
);
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
