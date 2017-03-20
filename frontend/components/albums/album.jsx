import React from 'react';
import {withRouter, Link} from 'react-router';

class Album extends React.Component {
  componentWillMount() {
    this.props.fetchAlbum().then(this.forceUpdate());
  }

  render() {
    if(!this.props.songs || !this.props.album) return null;

    console.log(this.props);

    return (
      <div className="album">
        <img src={this.props.album.image_url} />
        <h1>{this.props.album.title}</h1>
      <ul>
        {this.props.songs.map(song => (
          <li>{song.title}</li>
        ))}
      </ul>
      </div>
    );
  }
}

export default Album;
