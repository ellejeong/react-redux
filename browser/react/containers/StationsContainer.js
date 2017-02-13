import React, {Component} from 'react';
import Sidebar from '../components/Sidebar';
import Stations from '../components/Stations';
import {connect} from 'react-redux'

const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Death Metal' },
  { name: 'Classical' }
];

const convertSongsToStations = function(songsArray) {
    var genreObj = {};

    songsArray.forEach(function(song){
        const genre = song.genre;
        if(!genreObj[genre]) {
            genreObj[genre] = genreObj[genre] || [];
        }
        genreObj[genre].push(song);
    });

    return genreObj;
}


const mapStateToProps = function (state, ownProps) {
  return {
      stations: convertSongsToStations(state.songs)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
      // trigger an update 
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stations);