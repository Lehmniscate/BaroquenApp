import React from 'react'

class SideBar extends React.Component {

  render() {
    return (
      <div className="side-bar">
        <h1>Side Bar</h1>
        <a href="#" onClick={this.props.logout}>Log out</a>
      </div>
    );
  }
}

export default SideBar;
