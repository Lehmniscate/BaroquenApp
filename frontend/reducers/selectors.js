export const AlbumsByArtist = (music, artistId) => (
  Object.keys(music.albums).filter(id => music.albums[id].artist_id == artistId).map(id => music.albums[id])
);

export const SongsByAlbum = (music, albumId) => {
  if(!music.albums[albumId]) return [];
  if(!music.albums[albumId].songs) return [];
  return music.albums[albumId].songs.map(id => music.songs[id]);
};
