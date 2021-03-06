import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {connect} from 'react-redux'
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

//COMPONENT DEFINITION
class AddSongContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    });
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }
  render() {
    const songs = this.props.songs;
    const error = this.state.error;
    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.props.handleSubmit.bind(this)}/>
    );
  }
}
//CONNECT FUNCS
const mapStateToProps = (state) => {
  return {
    playlistId: state.playlists.selected.id,
    songs: state.songs
  }
}
const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: function(evt){
      console.log('THIS',this, 'PLAYLISTID: ', this.props.playlistId,'PLAYLIST SONG ID : ', this.state.songId)
      evt.preventDefault();
      dispatch(addSongToPlaylist(this.props.playlistId, this.state.songId))
      .catch(() => this.setState({ error: true }));
    }
  }
}
//ACTUAL CONNECT LOL
export default connect(mapStateToProps, mapDispatchToProps)(AddSongContainer)
