import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteEntry} from '../actions/deleteEntry'

const EntryList = (props) => {

    const handleDelete = (entry) => {
      props.deleteEntry(entry)
    }

    return(
      <div className="well">
        <h2>Entries: </h2>
        {props.entries.map(entry =>
          <div key={entry.id}>
            <Link to={`/entries/${entry.id}`}><h3>{entry.title}</h3></Link>
              <button onClick={() => handleDelete(entry)}>Delete</button>
          </div>)}
      </div>
    )
}

export default connect(null, {deleteEntry})(EntryList)
