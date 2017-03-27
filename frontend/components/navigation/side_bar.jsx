import React from 'react';
import {Link} from 'react-router';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newPlaylistName: "",
      modalDisplay: "modalDisplayOff"
    };
  }

  openModal(e) {
    e.preventDefault();
    this.setState({modalDisplay: "modalDisplayOn"});
    window.modal = true;
    return false;
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({modalDisplay: "modalDisplayOff"});
    window.modal = false;
    return false;
  }

  newPlaylist(e) {
    e.preventDefault();
    this.props.newPlaylist({
      title: this.state.newPlaylistName
    });
    this.setState({newPlaylistName: ""});
    this.closeModal(e);
    return false;
  }

  updateModal(e) {
    e.preventDefault();
    this.setState({newPlaylistName: e.target.value});
    return false;
  }

  render() {
    let user = this.props.currentUser;
    if(user)
      user = (<Link to="/profile"><img src={this.props.currentUser.image_url} />{this.props.currentUser.username}</Link>);
    else
      user = "";
    
    if(this.state.modalDisplay === "modalDisplayOn") {
      window.onclick = e => {
        if(e.target === document.getElementById('new-playlist-modal')){
          this.closeModal(e);
        }
      };
    }

    return (
      <div className="side-bar">
        <div>
          <div className="side-bar-logo">
            <img src="https://s3.amazonaws.com/baroquen-dev/disc-logo.png" />
          </div>
          <Link to="/home">Browse</Link>
        </div>
        <div>
          <a href="#" onClick={this.openModal.bind(this)}>New Playlist</a>
          {user}
          <a href="#" onClick={this.props.logout}>Log out</a>
        </div>
        <div id="new-playlist-modal" className={`modal ${this.state.modalDisplay}`}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal.bind(this)} >&times;</span>
            <input type="text" 
                    onChange={this.updateModal.bind(this)} 
                    placeholder="Enter Playlist Name..." />
            <span className="new-playlist-submit" 
                  onClick={this.newPlaylist.bind(this)}>Add Playlist</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
