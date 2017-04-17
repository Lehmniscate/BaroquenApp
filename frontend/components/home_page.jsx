import React from 'react';
import {withRouter} from 'react-router';

import BottomBar from './navigation/bottom_bar';
import SideBar from './navigation/side_bar';

class HomePage extends React.Component {

  logout() {
    this.props.router.push('/welcome');
    this.props.logout().then(() => this.props.router.push('/welcome'));
  }



  render() {
    return (
      <div className="home-page">
        <div className="wrapper">
          <div className="content">
            <div className="sidebar">
              <SideBar currentUser={this.props.currentUser} 
                        logout={this.logout.bind(this)} 
                        newPlaylist={this.props.newPlaylist} />
            </div>
            <div className="main">
              {this.props.children}
            </div>
            <div className="push"></div>
          </div>
        </div>
        <div className="footer"><BottomBar /></div>
      </div>
    );
  }
}

export default HomePage;
