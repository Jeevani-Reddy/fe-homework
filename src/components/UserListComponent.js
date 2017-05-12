/*eslint-disable no-unused-vars*/
import React from 'react'
import UserDetails from './UserDetailsComponent'
/*eslint-enable no-unused-vars*/
import '../styles/userList.css'

const UserListComponent = (props) => (
	<div className='contentWrapper'>
		<div className='header'>
			List of Created Users
			</div>
		<div className='contentContainer'>
			<ul className='listStyles'>
				{
					props.users.length > 0 
					? props.users.map(function (user) {return <UserDetails key={user.id} user={user} />}, props) 
					: <div>No Users available.</div>
				}
			</ul>
		</div>
	</div>
)

export default UserListComponent;
