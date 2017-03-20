import React from 'react';
import {withRouter, Link} from 'react-router';

class Browse extends React.Component {

  componentWillMount() {
    this.props.fetchArtists();
  }
  
  render() {
    return (
      <div className="artist-browse">
        {this.props.artists.map(artist => (
          <Link to={`artist/${artist.id}`} ><img src={artist.image_url} /></Link>))}
      </div>
    );
  }
}

export default Browse;
