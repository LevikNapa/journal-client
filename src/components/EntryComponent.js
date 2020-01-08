import React from 'react'
import {connect} from 'react-redux'
import EntryList from './EntryList'
import {Link} from 'react-router-dom'
import LikesComponent from './LikesComponent'

class EntryComponent extends React.Component {

  // constructor(props){
  //   super(props)
  //    this.state = {
  //      // id: props.id,
  //      // title: props.title,
  //      // content: props.content,
  //      likes: 0
  //    }
  //  }
  //
  //
  //   handleClick = () => {
  //     this.setState({
  //       likes: this.state.likes +1
  //     })

   // }
  render() {
    return (
      <div className="well">
        <h2>Entries: </h2>
        {this.props.entries.map(entry =>
          <div key={entry.id}>
            <Link to={`/entries/${entry.id}`}><h3>{entry.title}</h3></Link>
            <h4>{entry.content}</h4>
            <LikesComponent />
          </div>)}
      </div>
    )
  }
}
export default connect()(EntryComponent)
