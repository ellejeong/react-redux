import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils'


const mapSongs = function(allOfOurSongsArr, genre) {
    return allOfOurSongsArr.filter(function(song) {
        return song.genre === genre
    }).map(function(song) {
        // go thru filteredarr
        // for every song, it converts the song
        convertSong(song);
    });
}

const mapStateToProps = function (state, ownProps) {
    console.log('STATE.SONGS: ', state.songs);
  return {
     songs: mapSongs(state.songs, ownProps.params.genreName),
     isPlaying: state.isPlaying,
     currentSong: state.currentSong,
     genreName: ownProps.params.genreName
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
      // trigger an update 
    // toggleOne
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Station);