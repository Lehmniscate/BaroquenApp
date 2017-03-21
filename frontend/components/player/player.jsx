import React from 'react';
import {Link} from 'react-router';

import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0
    };
    this.playPause = this.playPause.bind(this);
    this.setVolume = this.setVolume.bind(this);
    this.onSeekMouseDown = this.onSeekMouseDown.bind(this);
    this.onSeekChange = this.onSeekChange.bind(this);
    this.onSeekMouseUp = this.onSeekMouseUp.bind(this);
    this.onProgress = this.onProgress.bind(this);
  }
  playPause() {
    this.setState({ playing: !this.state.playing })
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }

  onProgress(state) {
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  render() {
    const {
      playing, volume,
      played, loaded, duration
    } = this.state;

    return (
      <div>
        <ReactPlayer
          ref={player => { this.player = player }}
          hidden={true}
          className='react-player'
          url={this.props.playlist[this.props.song]}
          playing={playing}
          volume={volume}
          onPlay={() => this.setState({playing: true})}
          onPause={() => this.setState({ playing: false })}
          onBuffer={() => console.log('onBuffer')}
          onEnded={() => this.setState({ playing: false })}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={duration => this.setState({ duration })}
        />
      //Play Pause Button
        <button onClick={this.props.previousSong}>Prev</button>
        <button onClick={this.props.nextSong}>Next</button>
        <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
      //Seek Bar
        <input
          type='range' min={0} max={1} step='any'
          value={played}
          onMouseDown={this.onSeekMouseDown}
          onChange={this.onSeekChange}
          onMouseUp={this.onSeekMouseUp}
        />
      //volume
        <input type='range' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
        <button onClick={(e) => {e.preventDefault(); console.log("hi"); this.props.receiveSong(
            "/browse",
            ["https://s3.amazonaws.com/baroquen-dev/Albums/Organ+Works%3A+Other+Free+Works/James_Kibbie_-_15_-_BWV_582_Passacaglia_and_Fugue_in_C_Minor.mp3"],
            0
          ); return false;}}>Demo</button>
      </div>
    )
  }
}

export default Player;
