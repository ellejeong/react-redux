import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux'

import {toggleSong} from '../action-creators/player';


const mapStateToProps = (state, ownProps) =>{
  return {
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
    currentSongList: state.player.currentSongList,
    progress: state.player.progress,
    selectedArtist: state.artists.selected,
    children: ownProps.children
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Artist)
