import React, { Component } from 'react';
import CreateUserComponent from '../components/CreateUserComponent'
import SidePaneComponent from '../components/SidePaneComponent'

class CreateUserContainer extends Component {

	render() {
		return (
			<div className='itemsContainer'>
				<SidePaneComponent />
				<CreateUserComponent />
			</div>
		)
	}
}

export default CreateUserContainer
