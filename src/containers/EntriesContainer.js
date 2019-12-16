import React from 'react'
import {connect} from 'react-redux'
import {fetchEntries} from '../actions/fetchEntries'
import {Route} from 'react-router-dom'

import EntryShow from '../components/EntryShow'
import EntryForm from '../components/EntryForm'
import EntryList from '../components/EntryList'

class EntriesContainer extends React.Component {

  componentDidMount() {
     this.props.fetchEntries()
  }

  render() {
    return (
      <div>
        <Route path='/entries/new' component={EntryForm}/>
        <Route path='/entries/:id' render={(routerProps) => <EntryShow {...routerProps} entries={this.props.entries}/>} />
        <Route exact path='/entries' render={() => <EntryList entries={this.props.entries}/> }/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    entries: state.entries
  }
}

export default connect(mapStateToProps, {fetchEntries})(EntriesContainer)
