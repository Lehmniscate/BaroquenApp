import React from 'react';
import {withRouter, Link} from 'react-router';

import Song from '../songs/song';

class Playlist extends React.Component {
  componentWillMount() {
    this.props.fetchPlaylist()
      .then(this.forceUpdate());
  }

  playSong(song) {
    return e => {
      e.preventDefault();
      let id = 0;
      let playlist = this.props.songs.map((songObject, idx) => {
        if(songObject.id === song.id) {
          id = idx;
        }
        return songObject.id;
      });
      this.props.receiveSong(playlist, id);
      return false;
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
          <span onClick={this.playSong(songs[0])} className="button play-button">Play</span>
          <span onClick={e => this.props.deletePlaylist(playlist)} className="button delete-playlist">Delete</span>
        </div>
        <div className="list-push"></div>
        <ul className="song-list">
          {this.props.songs.map((song, i) => {
            if(!song) return null;
            
            return <Song key={song.id * i}
                        playSong={this.playSong(song)}
                        i={i}
                        song={song}
                        artists={artists}
                        playlist={playlist}
                        album={albums[song.album_id] || {}}
                        songs={songs} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Playlist;
