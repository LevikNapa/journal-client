import React from 'react'
import {connect} from 'react-redux'

class LikesComponent extends React.Component {

  constructor(props){
    super(props)
     this.state = {
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
export default connect()(LikesComponent)
