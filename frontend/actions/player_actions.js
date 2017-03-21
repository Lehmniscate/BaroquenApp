export const RECEIVE_SONG = "RECEIVE_SONG";
export const PLAY = "PLAY";
export const PAUSE = "PAUSE";
export const NEXT = "NEXT";
export const PREVIOUS = "PREVIOUS";

export const receiveSong = (playlist_url, playlist, song) => ({
  type: RECEIVE_SONG,
  playlist,
  song,
  playlist_url
});

export const nextSong = () => ({
  type: NEXT
});

export const previousSong = () => ({
  type: PREVIOUS
});
