import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router'

const HeaderComponent = (props) => (
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
