/*eslint-disable no-unused-vars*/
import React from 'react'
import { Link } from 'react-router'
/*eslint-enable no-unused-vars*/
import '../styles/sidePane.css'

const SidePaneComponent = (props) => ( //eslint-disable-line no-unused-vars
  <div className='sidePaneContainer'>
    <div className="appName">
      <Link to='/'>
        <img className='imgContainer' alt='' />
      </Link>
      Application Name
    </div>
    <div className="category">
      <div className="bgColor">
        Category 1
      </div>
      <div>
        <ul className="removeListcss">
          <Link to='/create'>Create User Page</Link>
        </ul>
      </div>
    </div>
    <div className="category">
      <div className="bgColor">
        Category 2
      </div>
      <div>
        <ul className="removeListcss">
          <Link to='/edit'>Edit User Page</Link>
        </ul>
      </div>
    </div>
    <div className="category">
      <div className="bgColor">
        Category 3
      </div>
    </div>
  </div>
)

export default SidePaneComponent;
