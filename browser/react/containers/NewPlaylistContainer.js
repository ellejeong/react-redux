import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import store from '../store';
import {connect} from 'react-redux';
import {addNewPlaylist} from '../action-creators/playlists';



class FormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.props.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  render() {
    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;
    let warning = '';
    if (!inputValue && dirty) warning = 'You must enter a name';
    else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';
    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={inputValue}
        warning={warning}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: function (evt) {
      evt.preventDefault();
      dispatch(addNewPlaylist(this.state.inputValue));
      this.setState({
      inputValue: '',
      dirty: false
    });
    }
  }
}

export default connect(null, mapDispatchToProps)(FormContainer);
