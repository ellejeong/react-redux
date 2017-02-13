import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    playlists: state.playlists.list
  }
}


export default connect(mapStateToProps)(Sidebar);