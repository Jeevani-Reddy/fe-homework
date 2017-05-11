import React,{PropTypes} from 'react';

const HomeComponent = (props) => (
	<div>
		This is Home Page		    		
	</div>
);

HomeComponent.propTypes = {
	menuClassName:PropTypes.string.isRequired
}
export default HomeComponent;