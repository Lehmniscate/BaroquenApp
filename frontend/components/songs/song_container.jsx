import {connect} from 'react-redux';
import Song from './song';

const mapStateToProps = ({player}) => ({
  nowPlaying: player.playlist[player.song]
});

export default connect(
  mapStateToProps,
  null
)(Song);
