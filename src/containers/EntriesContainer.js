import React from 'react'
import {connect} from 'react-redux'
import {fetchEntries} from '../actions/fetchEntries'

import EntryForm from '../components/EntryForm'
import EntryList from '../components/EntryList'

class EntriesContainer extends React.Component {

  componentDidMount() {
     this.props.fetchEntries()
  }

  render() {
    return (
      <div>
          <EntryForm/><br/><br/>
          <EntryList entries={this.props.entries}/>
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
