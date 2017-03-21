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
    if(!this.props.songs || !this.props.album || !this.props.songs[0]) return null;

    return (
      <div className="album">
        <img src={this.props.album.image_url} />
        <h1>{this.props.album.title}</h1>
      <ol>
        {this.props.songs.map(song => (
          <li key={song.id} onClick={this.playSong(song)}>{song.title}</li>
        ))}
      </ol>
      </div>
    );
  }
}

export default Album;
