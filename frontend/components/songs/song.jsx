import React from 'react';
import {Link} from 'react-router';

const Song = ({nowPlaying, symbol, song, i, album, artists, user, playSong, addToPlaylist}) => {
  let artist = artists[album.artist_id] || {};
  return (
    <li className={nowPlaying === song.id ? "playing song-list-item" : "song-list-item"}>
      <div className="song-list-info">
        <div onClick={playSong} className="song-list-play">
          <div className="song-list-play-overlay"><i className="fa fa-play" /></div>
          <div className="song-list-index">{i+1}</div>
        </div>
        <div>
          <div className="song-list-title">{song.title}</div> 
          <div className="song-list-track-info">
            <div className="song-list-artist"><Link to={`artist/${artist.id}`}>{artist.name}</Link></div>
            <div className="song-list-album"><Link to={`album/${album.id}`}>{album.title}</Link></div>
          </div>
        </div>
      </div>
      {addToPlaylist ? <div onClick={addToPlaylist} className="add-to-playlist">{symbol || "+"}</div> : null}
    </li>
  );
};

export default Song;
