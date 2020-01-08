import React, { Component } from 'react';
import {connect} from 'react-redux'
import EntriesContainer from './containers/EntriesContainer'
import EntryComponent from './components/EntryComponent'


class App extends Component {
  componentDidMount() {

  }
  render() {
   return (
    <div className="container-fluid">
      <EntriesContainer />
    </div>
  );
 }
}
//
// const mapStateToProps = (state) => {
//
// }

export default connect()(App);
