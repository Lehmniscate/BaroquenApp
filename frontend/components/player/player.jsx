import React from 'react';
import {Link} from 'react-router';

import ReactPlayer from 'react-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.receivePlayPause();
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
      volume, played, loaded, duration
    } = this.state;

    const {
      playlist,
      songs,
      albums,
      song,
      playing
    } = this.props;

    let nowPlaying = {};
    if(song) {
      nowPlaying = songs[playlist[song]];
    }

    return (
      <div>
        <ReactPlayer
          ref={player => { this.player = player }}
          hidden={true}
          className='react-player'
          url={nowPlaying.clip}
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

        <div className="currentlyPlaying">
          <Link to={this.props.playlist_url} className="now-playing">
            <span>Now Playing</span>
            <img src={nowPlaying.id ? albums[nowPlaying.album_id].image_url : ""} />
            <span>{nowPlaying.title}</span>
          </Link>
        </div>

        <div className="player-controls">
          <input
            type='range' min={0} max={1} step='any'
            className='sliders'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
          />

          <div className="song-controls">
            <button onClick={this.props.previousSong}>Prev</button>
            <button onClick={this.playPause}>{playing ? 'Pause' : 'Play'}</button>
            <button onClick={this.props.nextSong}>Next</button>
          </div>
        </div>

        <div className="volume-control">
          <input type='range' className='sliders' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
        </div>
      </div>
    )
  }
}

export default Player;
