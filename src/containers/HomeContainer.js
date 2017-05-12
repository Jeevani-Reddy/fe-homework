import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions';
import HomeComponent from '../components/HomeComponent'
import SidePaneComponent from '../components/SidePaneComponent'

class HomeContainer extends Component {
	render() {
		return (
			<div className='itemsContainer'>
				<SidePaneComponent />
				<HomeComponent />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state
	}
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispachToProps)(HomeContainer)
