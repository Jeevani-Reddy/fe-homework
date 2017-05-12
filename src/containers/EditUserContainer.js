/*eslint-disable no-unused-vars */
import React, { Component } from 'react';
import EditUserComponent from '../components/EditUserComponent'
import SidePaneComponent from '../components/SidePaneComponent'
/*eslint-enable no-unused-vars */

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
