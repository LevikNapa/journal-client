import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchEntries} from './actions/fetchEntries'


class App extends Component {
  componentDidMount() {
     this.props.fetchEntries({type: "FETCH_ENTRIES", payload: {title: 'best ever'}})
  }
  render() {
   return (
    <div className="App">
      App
    </div>
  );
 }
}
//
// const mapStateToProps = (state) => {
//
// }

export default connect(null, {fetchEntries})(App);
