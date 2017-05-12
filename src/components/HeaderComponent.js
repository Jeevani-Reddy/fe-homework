/*eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router'
/*eslint-enable no-unused-vars */

import '../styles/header.css'

const HeaderComponent = (props) => ( //eslint-disable-line no-unused-vars
  <div className="headerContainer">
    <div className='headerDetails'>
			<div>
        <div>Jeevani Reddy</div>
          <Link to='/logout'>
            Logout
          </Link>
        </div>
				<img className='imgStyles' alt='' src='' />
			</div>
	</div>
)

export default HeaderComponent
