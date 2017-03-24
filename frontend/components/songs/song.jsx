import React from 'react';
import {Link} from 'react-router';

const Song = ({song, i, album, artists, user, playSong, addToPlaylist}) => {

  return (
    <li>
      <div onClick={playSong} className="song-list-play-button">
        <div className="song-list-play">
          <div className="song-list-play-overlay">&#9658;</div>
          <div className="song-list-index">{i+1}</div>
        </div>
        <div className="song-list-title">{song.title}</div>
      </div>
      <div className="song-list-album">{album.title}</div>
      <div className="song-list-artist">{artists[album.artist_id] ? artists[album.artist_id].name : ""}</div>
      {addToPlaylist ? <div onClick={addToPlaylist} className="add-to-playlist">&#43;</div> : null}
    </li>
  );
};

export default Song;
