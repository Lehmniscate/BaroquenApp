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
        <div className="artist-info">
          <div className="info-image">
            <img src={this.props.artist.image_url} />
          </div>
          <h1>{this.props.artist.name}</h1>
        </div>
        <div className="list-push"></div>
        <ul className="table-view">
          {this.props.albums.map(album => (
            <li key={album.id}>
              <Link to={`album/${album.id}`}>
                <div className="list-image"><img src={album.image_url} /></div>
                <div className="list-title">{album.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Artist;
