import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux'
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';


// WE CAN ALSO USE:
//Object.assign({selectedPlaylist: state.playlists.selected}, state.player)
const mapStateToProps = (state, ownProps) => {
  return {
    selectedPlaylist: state.playlists.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    currentSongList: state.player.currentSongList,
    progress: state.player.progress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleOne: (song, list) => {
      dispatch(toggleSong(song, list));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Playlist)