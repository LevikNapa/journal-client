import React from 'react'
import {connect} from 'react-redux'
import {editEntry} from '../actions/editEntry'

class EntryEdit extends React.Component {

   state = {
     content: ''
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     })
   }

   handleSubmit = (event) => {
     event.preventDefault()
    let entry = {...this.state, id: this.props.entry.id}
      this.props.editEntry(entry)
      this.setState({
        content: ''
      })
   }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Edit Content:  </label>
          <input type='text' placeholder='Content' value={this.state.content} name='content' onChange={this.handleChange}/><br/>
          <input className="btn btn-info" type='submit'/>
        </form>
      </div>
    )
  }
}
export default connect(null, {editEntry})(EntryEdit)
