import React, {Component} from 'react';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

// export default class extends Component {

//   constructor() {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState());
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   toggle(song, list) {
//     store.dispatch(toggleSong(song, list));
//   }

//   render() {
//     return <Album
//       selectedAlbum={this.state.albums.selected}//mapped
//       currentSong={this.state.player.currentSong}//mapped
//       isPlaying={this.state.player.isPlaying}
//       toggleOne={this.toggle}
//     />;
//   }

// }
const mapStateToProps = (state) =>{
  return{
    selectedAlbum: state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Album)
