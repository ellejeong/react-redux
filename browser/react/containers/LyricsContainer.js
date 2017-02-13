import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';
import {searchLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component {

  constructor(props) {

    super(props);

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    });

    this.handleSubmit = this.props.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }
  render() {
    return (
      <Lyrics
        {...this.state}
        lyrics= {this.props.lyrics}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

const mapStateToProps = (state) =>{
  return{
    lyrics: state.lyrics.text
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleSubmit: function(e){
      e.preventDefault();
      if (this.state.artistQuery && this.state.songQuery) {
        dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LyricsContainer)
