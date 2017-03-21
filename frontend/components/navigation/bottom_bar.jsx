import React from 'react'
import PlayerContainer from '../player/player_container';

class BottomBar extends React.Component {
  render() {
    return (
      <div className="bottom-bar">
        <PlayerContainer />
      </div>
    );
  }
}

export default BottomBar;
