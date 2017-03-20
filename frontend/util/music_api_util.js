export const receiveSong = id => (
  $.ajax({
    url: `api/songs/${id}`,
    method: 'get'
  })
);

export const receiveAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`,
    method: 'get'
  })
);

export const receiveArtist = id => (
  $.ajax({
    url: `api/artists/${id}`,
    method: 'get'
  })
);

export const receiveSongs = album_id => (
  $.ajax({ 
    url: `api/albums/${album_id}/songs`,
    method: 'get'
  })
);

export const receiveAlbums = artist_id => (
  $.ajax({
    url: `api/artists/${artist_id}/albums`,
    method: 'get'
  })
);

export const receiveArtists = () => (
  $.ajax({
    url: `api/artists`,
    method: 'get'
  })
);
