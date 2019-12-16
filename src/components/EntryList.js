import React from 'react'
import EntryShow from './EntryShow'

const EntryList = (props) => {
    return(
      <div>
        {props.entries.map(entries =>
          <li key={entries.id}><EntryShow entries={entries}/></li>)}
      </div>
    )
}
export default EntryList
 
