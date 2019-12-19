import React from 'react'
import EntryEdit from './EntryEdit'
import {Link} from 'react-router-dom'

const EntryShow = (props) => {

  // let entry = props.entries[props.match.params.id -1]
  let entry = props.entries.filter(entry => entry.id == props.match.params.id)[0]

  return (
    <div className="col-md-6 right-align jumbotron">
      <h2>{entry ? entry.title : null}</h2> <p>{entry ? entry.content : null}</p> <br/>
      <EntryEdit entry={entry}/>
    </div>
  )

}
export default EntryShow
