import React from 'react'
import EntryForm from '../components/EntryForm'
import {connect} from 'react-redux'
import {addEntry} from '../actions/addEntry'

class NewEntryContainer extends React.Component {

   state = {
     title: '',
     content: ''
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   handleSubmit = (event) => {
     event.preventDefault()
      this.props.addEntry(this.state)
      this.setState({
        title: '',
        content: ''
      })
   }

  render() {
    return (
      <div>
        <h2>New Entry</h2>
        <EntryForm entry={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default connect(null, {addEntry})(NewEntryContainer)
