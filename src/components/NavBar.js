import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

const NavBar = () => {
  return (

    <nav>
      <div>
        <NavLink
          style={{ marginRight: '12px' }}
          to="/" exact className="btn btn-success">Home</NavLink>
        <NavLink
          style={{ marginRight: '12px' }}
          to="/entries" exact className="btn btn-warning">Entries</NavLink>

          <NavLink
            style={{ marginRight: '12px' }}
            to="/entries/new" exact className="btn btn-primary">New Entry</NavLink>
      </div>
    </nav>
  )
}
export default connect()(NavBar)
