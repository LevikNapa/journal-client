import React from 'react'

const EntryList = (props) => {
    return(
      <div>
        {props.entries.map(entries => <li key={entries.id}>{entries.title} - {entries.content}</li>)}
      </div>
    )
}
export default EntryList
