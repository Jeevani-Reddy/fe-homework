import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import '../styles/createUser.css'
import Input from '../components/InputComponent'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions'

class EditUserComponent extends Component {

	constructor() {
		super()
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			isSaved: false
		}
		this.userId = 0
		this.user = {}
		this.saveOrCreateUser = this.saveOrCreateUser.bind(this)
		this.onChangeFirstName = this.onChangeFirstName.bind(this)
		this.onChangeLastName = this.onChangeLastName.bind(this)
		this.onChangeEmail = this.onChangeEmail.bind(this)
	}

	componentDidMount() {
		const locationStringArr = window.location.pathname.split('/')
		const lastString = locationStringArr[locationStringArr.length - 1]
		const regEx = /^\d+$/
		if (regEx.test(lastString)) {
			this.userId = parseInt(lastString)
			let user = this.props.data.home.users.filter(user => user.id === this.userId)
			this.user = user[0]
		}
	}

	onChangeFirstName(value) {
		this.setState({
			firstName: value
		})
	}

	onChangeLastName(value) {
		this.setState({
			lastName: value
		})
	}

	onChangeEmail(value) {
		this.setState({
			email: value
		})
	}

	saveOrCreateUser() {
		this.setState({
			isSaved: true
		})
		if (this.userId) {
			this.props.updateUser(this.userId, this.state.firstName, this.state.lastName, this.state.email)
		} else {
			this.props.createUser(this.state.firstName, this.state.lastName, this.state.email)
		}
	}

	render() {
		return (
			<div className='w100p'>
				<HeaderComponent />
				<div className='formContainer'>
					<div className='header'>
						Edit Existing User Form
					</div>
					<div className='fieldsWrapper'>
						<div className='nameFieldsWrapper'>
							<div>
								<label>First Name</label>
								<Input
									type='text'
									onChange={this.onChangeFirstName}
									value={this.user.firstName}
								/>
							</div>
							<div className='lastName'>
								<label>Last Name</label>
								<Input
									type='text'
									onChange={this.onChangeLastName}
									value={this.user.lastName}
								/>
							</div>
						</div>
						<div className='emailwrapper'>
							<label>Email Address</label>
							<div className='email'>
								<Input
									type='email'
									onChange={this.onChangeEmail}
									value={this.user.email}
								/>
							</div>
						</div>
						<button className='btnStyles' onClick={this.saveOrCreateUser}>Save User</button>
					</div>
				</div>
				<div className='contentWrapper'>
					<div className='header'>
						List of Saved Users
					</div>
					<div className='contentContainer'>
						{
							this.state.isSaved ? <ul className='listStyles'>
								{this.state.firstName} {this.state.lastName}
							</ul> : ''
						}
					</div>
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({ data: state })

let mapDispatchToProps = (dispatch) =>
	bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditUserComponent)
