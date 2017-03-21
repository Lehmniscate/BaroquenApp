import React from 'react';
import {withRouter, Link} from 'react-router';

class Artist extends React.Component {
  componentWillMount() {
    this.props.fetchArtist().then(() => this.forceUpdate());
  }

  render() {
    if(!this.props.artist) return null;
    return (
      <div className="artist">
        <img src={this.props.artist.image_url} />
        <h1>{this.props.artist.name}</h1>
        <ul>
          {this.props.albums.map(album => (
            <li key={album.id}><Link to={`album/${album.id}`}><img src={album.image_url} />{album.title}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Artist;
