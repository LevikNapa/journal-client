import React from 'react'
import {connect} from 'react-redux'
import {fetchEntries} from '../actions/fetchEntries'
import {Route, Switch} from 'react-router-dom'

import Home from '../components/Home'
import EntryShow from '../components/EntryShow'
import EntryForm from '../components/EntryForm'
import EntryList from '../components/EntryList'
import EntryEdit from '../components/EntryEdit'
import NewEntryContainer from './NewEntryContainer'
import NavBar from '../components/NavBar'
import EntryComponent from '../components/EntryComponent'

class EntriesContainer extends React.Component {

  componentDidMount() {
     this.props.fetchEntries()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/entries/new' component={NewEntryContainer}/>
          <Route path='/entries/:id' render={(routerProps) => <EntryShow {...routerProps} entries={this.props.entries}/>} />
          <Route exact path='/entries' render={() => <EntryList entries={this.props.entries}/> }/>
        </Switch>
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
