import React, {Component} from 'react';
import {connect} from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'


const mapSongs = function(allOfOurSongsArr, genre) {
    return allOfOurSongsArr.filter(function(song) {
        return song.genre === genre
    }).map(function(song) {
        // go thru filteredarr
        // for every song, it converts the song
        return convertSong(song);
    });
}

const mapStateToProps = function (state, ownProps) {
  return {
     songs: mapSongs(state.songs, ownProps.params.genreName),
     isPlaying: state.player.isPlaying,
     currentSong: state.player.currentSong,
     genreName: ownProps.params.genreName
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function(song, list){
        dispatch(toggleSong(song, list))
    }
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Station);
