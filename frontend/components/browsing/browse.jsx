import React from 'react';
import {withRouter, Link} from 'react-router';

class Browse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "artist"
    };
  }

  componentWillMount() {
    this.props.fetchArtists();
    this.props.fetchPlaylists();
  }

  setBrowse(content) {
    return e => this.setState({content});
  }

  tableView() {
    let {content} = this.state;
    let {artists, playlists, users} = this.props;
    let objects = [];
    let address = "";

    switch(content) {
      case "artist":
        objects = artists || [];
        address = "artist";
        break;
      case "playlist":
        objects = playlists || [];
        address = "playlist";
        break;
      case "user":
        objects = users || [];
        address = "user";
        break;
      default:
        break;
    };

    return (
      <ul className="table-view">
        {objects.map(object => (
          <li key={object.id}>
            <Link to={`${address}/${object.id}`} >
              <div className="list-image"><img src={object.image_url} /></div>
              <div className="list-title">{object.name || object.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
  
  render() {
    return (
      <div className="artist-browse">
        <div className="content-nav">
          <span onClick={this.setBrowse("artist")}>Artists</span>
          <span onClick={this.setBrowse("playlist")}>Playlists</span>
        </div>
      {this.tableView()}
      </div>
    );
  }
}

export default Browse;
