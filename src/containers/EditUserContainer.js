import React, { Component } from 'react';
import EditUserComponent from '../components/EditUserComponent'
import SidePaneComponent from '../components/SidePaneComponent'

class EditUserContainer extends Component {

	render() {
		return (
			<div className='itemsContainer'>
				<SidePaneComponent />
				<EditUserComponent />
			</div>
		);
	}
}

export default EditUserContainer
