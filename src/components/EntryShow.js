import React from 'react'

const EntryShow = (props) => {

  let entry = props.entries[props.match.params.id -1]
  return (
    <div>
      {entry ? entry.title : null} - {entry ? entry.content : null}
    </div>
  )

}
export default EntryShow
