import React from 'react'

const EntryForm = (props) => {
console.log(props)
    return (
      <div className="form-group well">
        <form onSubmit={props.onSubmit}>
          <label>Title: </label>
          <div className="field"><input type='text' placeholder='Title' value={props.entry.title} name='title' onChange={props.onChange}/></div><br/>
          <label>Content: </label>
          <div><input type='text' placeholder='Content' value={props.entry.content} name='content' onChange={props.onChange}/></div><br/>
          <input className="btn btn-info" type='submit'/>
        </form>
      </div>
    )
}

export default EntryForm
