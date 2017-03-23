import React from 'react';
import {withRouter, Link} from 'react-router';

class Album extends React.Component {
  componentWillMount() {
    this.props.fetchAlbum().then(this.forceUpdate());
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
    if(!this.props.songs || !this.props.album || !this.props.songs[0] || !this.props.artists[this.props.album.artist_id]) return null;

    let album = this.props.album;
    let artists = this.props.artists;


    return (
      <div className="album">
        <div className="album-info">
          <img src={this.props.album.image_url} />
          <h1>{this.props.album.title}</h1>
          <h4><Link to={`artist/${album.artist_id}`}>{artists[album.artist_id].name}</Link></h4>
        </div>
        <ul className="song-list">
          {this.props.songs.map((song, i) => (
            <li key={song.id} onClick={this.playSong(song)}>
              <div className="song-list-index">{i+1}</div>
              <div className="song-list-title">{song.title}</div>
              <div className="song-list-artist">{artists[album.artist_id].name}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Album;
