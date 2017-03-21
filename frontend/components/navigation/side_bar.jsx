import React from 'react';
import {Link} from 'react-router';

class SideBar extends React.Component {

  render() {
    let user = this.props.currentUser;
    if(user)
      user = (<Link to="/profile"><img src={this.props.currentUser.image_url} />{this.props.currentUser.username}</Link>);
    else
      user = "";

    return (
      <div className="side-bar">
        <div>
          <a href="#" onClick={this.props.logout}>Log out</a>
          <Link to="/browse">Browse</Link>
        </div>
        {user}
      </div>
    );
  }
}

export default SideBar;
