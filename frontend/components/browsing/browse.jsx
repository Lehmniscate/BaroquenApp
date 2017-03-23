import React from 'react';
import {withRouter, Link} from 'react-router';

class Browse extends React.Component {

  componentWillMount() {
    this.props.fetchArtists();
  }
  
  render() {
    return (
      <div className="artist-browse">
        <ul className="table-view">
          {this.props.artists.map(artist => (
            <li key={artist.id}>
              <Link to={`artist/${artist.id}`} >
                <div className="list-image"><img src={artist.image_url} /></div>
                <div className="list-title">{artist.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Browse;
