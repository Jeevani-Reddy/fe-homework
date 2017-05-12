/*eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CreateUserComponent from '../components/CreateUserComponent'
import SidePaneComponent from '../components/SidePaneComponent'
/*eslint-enable no-unused-vars */

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
