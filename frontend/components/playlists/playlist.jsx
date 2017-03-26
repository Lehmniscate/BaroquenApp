import React from 'react';
import {withRouter, Link} from 'react-router';

import SongContainer from '../songs/song_container';

class Playlist extends React.Component {
  componentWillMount() {
    this.props.fetchPlaylist()
      .then(this.forceUpdate());
  }

  playSong(song, idx) {
    return e => {
      e.preventDefault();
      let playlist = this.props.songs.map(songObject => {
        return songObject.id;
      });
      this.props.receiveSong(playlist, idx);
      return false;
    };
  }

  removeSong(song, idx) {
    return e => {
      let playlist = this.props.playlist;
      playlist.songs = playlist.songs.slice(0, idx).concat(playlist.songs.slice(idx + 1));
      this.props.updatePlaylist(playlist);
    };
  }

  render() {
    let playlist = this.props.playlist || {};
    let artists = this.props.artists || {};
    let songs = this.props.songs || [];
    let albums = this.props.albums || {};

    return (
      <div className="playlist">
        <div className="playlist-info">
          <div className="info-image">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <div><img src={playlist.image_url} /></div>
          </div>
          <h1>{playlist.title}</h1>
          <span onClick={this.playSong(songs[0], 0)} className="button play-button">Play</span>
          <span onClick={e => this.props.deletePlaylist(playlist)} className="button delete-playlist">Delete</span>
        </div>
        <div className="list-push"></div>
        <ul className="song-list">
          {this.props.songs.map((song, i) => {
            if(!song) return null;
            
            return <SongContainer key={song.id * i}
                        playSong={this.playSong(song, i)}
                        i={i}
                        song={song}
                        artists={artists}
                        playlist={playlist}
                        album={albums[song.album_id] || {}}
                        songs={songs} 
                        addToPlaylist={this.removeSong(song, i)}
                        symbol={"-"}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default Playlist;
