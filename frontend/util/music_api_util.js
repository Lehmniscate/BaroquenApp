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

export const receivePlaylists = (options = {}) => (
  $.ajax({
    url: `api/playlists`,
    method: 'get',
    data: options
  })
);

export const receivePlaylist = (id) => (
  $.ajax({
    url: `api/playlists/${id}`,
    method: 'get'
  })
);

export const createPlaylist = (playlist) => (
  $.ajax({
    url: 'api/playlists',
    method: 'post', 
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({playlist})

  })
);

export const updatePlaylist = (playlist) => (
  $.ajax({
    url: `api/playlists/${playlist.id}`,
    method: 'put',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({playlist})
  })
);

export const deletePlaylist = (id) => (
  $.ajax({
    url: `api/playlists/${id}`,
    method: 'delete' 
  })
);
