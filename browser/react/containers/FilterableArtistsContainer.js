import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import {connect} from 'react-redux';

class FilterableArtistsContainer extends React.Component {

  constructor() {

    super();

    this.state = Object.assign({
      inputValue: ''
    });

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    artists: state.artists.list,
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  }
}


export default connect(mapStateToProps)(FilterableArtistsContainer)
