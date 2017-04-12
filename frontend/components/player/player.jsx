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

  keyPress(e) {
    e = e || window.event;
    if(e.keyCode == 32 && !window.modal) {
      e.preventDefault();
      this.props.receivePlayPause();
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
    if(songs[playlist[song]]) {
      nowPlaying = songs[playlist[song]];
    }

    let album = albums[nowPlaying.album_id] || {};

    const play = () => (
      <svg onClick={this.playPause.bind(this)} className="button-play playable" viewBox="0 0 131 141" >
        <path d="M 0 70 L 0 10 Q 0 0 8.8 4.74 L 121.2 65.26 Q 130 70 121.2 74.4 L 8.8 135.26 Q 0 140 0 130 Z" fill="gray" />
      </svg>
    );

    const pause = () => (
      <svg onClick={this.playPause.bind(this)} className="button-pause playable" viewBox="0 0 131 141" >
        <rect x="10" y="0" width="50" height="140" rx="7.5" ry="7.5" fill="grey" />
        <rect x="70" y="0" width="50" height="140" rx="7.5" ry="7.5" fill="grey" />
      </svg>
    );

    const playable = condition => {
      if(condition) {
        return !playing ? play() : pause();
      } else {
        return (
          <svg className="disabled-play" viewBox="0 0 131 141" >
            <path d="M 0 70 L 0 10 Q 0 0 8.8 4.74 L 121.2 65.26 Q 130 70 121.2 74.4 L 8.8 135.26 Q 0 140 0 130 Z" fill="gray" />
          </svg>
        );
      }
    };

    const currentlyPlaying = () => {
      if(!nowPlaying.id) return null;
      return (
        <div className="currentlyPlaying">
          <Link to={this.props.playlist_url} className="now-playing">
            <img src={nowPlaying.id ? album.image_url : ""} />
          </Link>
          <div>
            <Link to={this.props.playlist_url}>{nowPlaying.title}</Link>
            <Link className="currently-playing-album" to={`album/${nowPlaying.album_id}`}>{album.title}</Link>
          </div>
        </div>
      );
    };

    document.onkeypress = this.keyPress.bind(this);

    let playingClass = !!nowPlaying.clip ? "playable" : "unplayable";

    return (
      <div>
        <ReactPlayer
          ref={player => { this.player = player }}
          hidden={true}
          className="react-player"
          url={nowPlaying.clip}
          playing={playing}
          volume={volume}
          onPlay={() => this.setState({playing: true})}
          onPause={() => this.setState({ playing: false })}
          onBuffer={() => console.log('onBuffer')}
          onEnded={() => this.props.nextSong()}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress}
          onDuration={duration => this.setState({ duration })}
        />

      {currentlyPlaying()}
        <div className="control-push"></div>
        <div className="player-controls">
          <div className="song-controls">
            <svg onClick={this.props.previousSong} className={`button-prev ${playingClass}`} viewBox="0 0 131 142">
              <rect x="100" y="0" width="30" height="140" rx="4.5" ry="4.5" fill="gray" />
              <path d="M 0 70 L 0 10 Q 0 0 7.89 6.14 L 82.11 63.86 Q 90 70 82.11 76.14 L 7.89 133.86 Q 0 140 0 130 Z" fill="gray" transform="rotate(180, 45, 70)" />
            </svg>

            {playable(!!nowPlaying.clip)}

            <svg onClick={this.props.nextSong} className={`button-next ${playingClass}`} viewBox="0 0 131 142">
              <rect x="0" y="0" width="30" height="140" rx="4.5" ry="4.5" fill="gray" />
              <path d="M 40 70 L 40 10 Q 40 0 47.89 6.14 L 122.11 63.86 Q 130 70 122.11 76.14 L 47.89 133.86 Q 40 140 40 130 Z" fill="gray" />
            </svg>
          </div>

          <div className="song-progress">
            <div className="song-progress-bar">
           <input
            type='range' min={0} max={1} step='any'
            className='sliders'
            value={played}
            onMouseDown={this.onSeekMouseDown}
            onChange={this.onSeekChange}
            onMouseUp={this.onSeekMouseUp}
            />
            </div>
            <div className="song-progress-played" style={{"width" : `${played*290}px`}}></div>
            <div className="song-progress-total"></div>
          </div>

       </div>

        <div className="volume-control">
          <input type='range' className='sliders' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
            <div className="volume-progress-played" style={{"width" : `${volume*90}px`}}></div>
            <div className="volume-progress-total"></div>
        </div>
      </div>
    )
  }
}

export default Player;
