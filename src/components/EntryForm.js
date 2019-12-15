import React from 'react'
import {connect} from 'react-redux'
import {addEntry} from '../actions/addEntry'

class EntryForm extends React.Component {

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
   }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type='text' placeholder='Title' value={this.state.title} name='title' onChange={this.handleChange}/><br/>
          <label>Content: </label>
          <input type='text' placeholder='Content' value={this.state.content} name='content' onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
export default connect(null, {addEntry})(EntryForm)
