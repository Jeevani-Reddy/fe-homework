import React from 'react'
import { Link } from 'react-router'

const UserDetailsComponent = (props) => (
	<li>
		<span>{props.user.firstName} {props.user.lastName}</span>&nbsp;
        <Link to={'/edit/' + props.user.id}><span>EDIT</span></Link>
	</li>
)

export default UserDetailsComponent
