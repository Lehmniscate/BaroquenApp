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
      duration: 0,
      muted: false
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
      played, loaded, duration, muted
    } = this.state;

    const volume = muted ? 0 : this.state.volume;

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
     
    const play = () => <i onClick={this.playPause.bind(this) } className="button-play playable fa fa-play" />;

    const pause = () => <i onClick={this.playPause.bind(this)} className="button-pause playable fa fa-pause" />;

    const playable = condition => {
      if(condition) {
        return !playing ? play() : pause();
      } else {
        return (
          <i className="disabled-play fa fa-play" />
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
            <i onClick={this.props.previousSong} className={`button-prev ${playingClass} fa fa-step-backward`} />
            {playable(!!nowPlaying.clip)}
            <i onClick={this.props.nextSong} className={`button-next ${playingClass} fa fa-step-forward`} />
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
          {muted ? 
              <i onClick={() => this.setState({muted: false})} className="fa fa-volume-off" /> : 
              <i onClick={() => this.setState({muted: true})}className="fa fa-volume-up" />}
          <div>
            <input type='range' className='sliders' min={0} max={1} step='any' value={volume} onChange={this.setVolume} />
            <div className="volume-progress-played" style={{"width" : `${volume*90}px`}}></div>
            <div className="volume-progress-total"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Player;
