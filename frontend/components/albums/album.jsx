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
      let playlist = this.props.songs.map(songId, idx => {
        if(songId === song.id) {
          id = idx;
        }
        return songId;
      });
      this.props.receiveSong(playlist, id);
      return false;
    };
  }

  render() {
    if(!this.props.songs || !this.props.album) return null;

    console.log(this.props);

    return (
      <div className="album">
        <img src={this.props.album.image_url} />
        <h1>{this.props.album.title}</h1>
      <ol>
        {this.props.songs.map(song => (
          <li onClick={this.playSong(song)}>{song.title}</li>
        ))}
      </ol>
      </div>
    );
  }
}

export default Album;
