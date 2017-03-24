import React from 'react';
import {withRouter, Link} from 'react-router';

import PlaylistSelectorContainer from '../songs/playlist_selector_container.jsx';
import Song from '../songs/song';

class Album extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      song: null
    };
  }

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

  addToPlaylist(song) {
    return e => {
      e.preventDefault();
      this.setState({song: song});
      return false;
    };
  }

  closeSelector() {
    return e => this.setState({song: null});
  }

  render() {
    if(!this.props.songs || !this.props.album || !this.props.songs[0] || !this.props.artists[this.props.album.artist_id]) return null;

    let album = this.props.album;
    let artists = this.props.artists;


    return (
      <div className="album">
        <div className="album-info">
          <div className="info-image">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <div><img src={this.props.album.image_url} /></div>
          </div>
          <h1>{this.props.album.title}</h1>
          <h4><Link to={`artist/${album.artist_id}`}>{artists[album.artist_id].name}</Link></h4>
        </div>
        <div className="list-push"></div>
        <ul className="song-list">
          {this.props.songs.map((song, i) => {
            if(!song) return null;

            return <Song addToPlaylist={this.addToPlaylist(song)}
              key={song.id + i} 
              playSong={this.playSong(song)} 
              song={song} 
              artists={artists} album={album} i={i} />;
          })}
        </ul>
        <PlaylistSelectorContainer closeSelector={this.closeSelector()} song={this.state.song} />
      </div>
    );
  }
}

export default Album;
