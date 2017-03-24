import React from 'react';

class PlaylistSelector extends React.Component {

  componentWillMount() {
    this.props.fetchPlaylists().then(this.forceUpdate());
  }

  updatePlaylist(playlist) {
    return e => {
      this.props.fetchPlaylist(playlist.id).then(() => {
        playlist.songs.push(this.props.song.id);
        this.props.updatePlaylist(playlist);
        this.props.closeSelector(e);
      });
    };
  }

  render() {
    let user = this.props.currentUser;
    let playlists = this.props.playlists || [];
    if(this.props.song) {
      window.onclick = e => {
        if(e.target === document.getElementById('add-to-playlist-modal')) {
          this.props.closeSelector(e);
        }
      };
      return (
        <div id="add-to-playlist-modal" className={"modal modalDisplayOn"}>
          <div className="modal-content">
            <span className="close" onClick={this.props.closeSelector}>&times;</span>
            <ul className="table-view">
              {playlists.map(playlist => {
                if(playlist.user_id !== user.id) return null;

                return (
                  <li key={playlist.id}>
                    <div onClick={this.updatePlaylist(playlist)}>
                      <div className="list-image"><img src={playlist.image_url} /></div>
                      <div className="list-title">{playlist.title}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PlaylistSelector;
