import React, { Component } from 'react';
import {Link} from 'react-router';

class Player extends Component {
  playPause = () => {
        this.setState({ playing: !this.state.playing })
      }
    stop = () => {
          this.setState({ url: null, playing: false })
        }
    setVolume = e => {
          this.setState({ volume: parseFloat(e.target.value) })
        }onSeekMouseDown = e => {
              this.setState({ seeking: true })
            }
    onSeekChange = e => {
          this.setState({ played: parseFloat(e.target.value) })
        }
    onSeekMouseUp = e => {
          this.setState({ seeking: false })
          this.player.seekTo(parseFloat(e.target.value))
        }
    onProgress = state => {
          // We only want to update time slider if we are not currently seeking
      //     if (!this.state.seeking) {
      //           this.setState(state)
      //               }
      //                 }
