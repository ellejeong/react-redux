import React, {Component} from 'react';
import AUDIO from '../audio';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

class PlayerContainer extends Component {
  componentDidMount() {
    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => {
      this.props.updateProgress();
    });
  }

  render() {
    console.log('THIS PROPSADSNDND', this.props);
    return <Player
      {...this.props}
      next={this.props.next}
      prev={this.props.prev}
      toggle={this.props.toggle}
    />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    progress: state.player.progress,
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong,
    currentSongList: state.player.currentSongList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: (song, list) => {
      // you can add any args you want
      // toggle function is defined outside of the constructor
      // this means you cant bind it because it's not defined there
      // constructor was deleted because we don't need anything in there now!
      dispatch(toggleSong(song, list))
    },
    next: () => {
      dispatch(next());
    },
    prev: () => {
      dispatch(previous());
    },
    updateProgress: () => {
      dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);