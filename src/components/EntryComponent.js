import React from 'react'
import EntryList from './EntryList'
import {Link} from 'react-router-dom'

class EntryComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
       id: props.id,
       title: props.title,
       content: props.content,
       likes: 0
     }
   }

    handleClick = () => {
      this.setState({
        likes: this.state.likes +1
      })

   }
  render() {
    return (
      <div>
               <button
                 onClick={this.handleClick}>
                  Like {this.state.likes}
               </button>
      </div>
    )
  }
}
export default EntryComponent
