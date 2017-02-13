import store from '../store';

/*
 {
 puppies: ['Henry', 'Lilie', 'Roxy', 'Coco']
 }

 ADD_PUPPY: { name: '' }

 */

import React, {Component} from 'react';
import {connect} from 'react-redux';


connect();
// returns a React component
// 2 functions


export default class PuppyContainer extends Component {

    constructor() {
        super();
        this.state = Object.assign({}, store.getState());
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addShadow() {
        store.dispatch({type: 'ADD_PUPPY', name: 'Shadow'});
    }

    render() {
        return (
          <div>
              {this.state.puppies.map(puppy => {
                  return <Puppy name={puppy} key={puppy}/>;
              })}
              <button onClick={this.state.addShadow}>Submit</button>
          </div>
        );
    }

}

const PuppyContainer = props => {
    return (
      <div>
          {props.puppies.map(puppy => {
              return <Puppy name={puppy} key={puppy}/>;
          })}
          <button onClick={props.addShadow}>Submit</button>
      </div>
    );
};

connect(
  // mapStateToProps
  state => {
      return {
          puppies: state.puppies
      };
  },
  // mapDispatchToProps
  dispatch => {
      return {
          addShadow: function () {
              dispatch({ type: 'ADD_PUPPY', name: 'Shadow' })
          }
      }
  }
)(PuppyContainer);



