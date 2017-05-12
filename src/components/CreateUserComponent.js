/*eslint-disable no-unused-vars */
import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import UserListComponent from './UserListComponent'
import Input from '../components/InputComponent'
/*eslint-enable no-unused-vars */
import '../styles/createUser.css'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actions'

class CreateUserComponent extends Component {

  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      disabled: true
    }
    this.createUser = this.createUser.bind(this)
    this.onChangeFirstName = this.onChangeFirstName.bind(this)
    this.onChangeLastName = this.onChangeLastName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.enableCreate = this.enableCreate.bind(this)
  }

  onChangeFirstName (value) {
    this.setState({
      firstName: value
    })
    this.enableCreate()
  }

  onChangeLastName (value) {
    this.setState({
      lastName: value
    })
    this.enableCreate()
  }

  onChangeEmail (value) {
    this.setState({
      email: value
    })
    this.enableCreate()
  }

  enableCreate() {
    if(this.state.firstName && this.state.lastName && this.state.email) {
      this.setState({
        disabled: false
      })
    }
  }

  createUser () {
    this.props.createUser(this.state.firstName, this.state.lastName, this.state.email)
  }

  render() {
    return (
      <div className='w100p'>
        <HeaderComponent />
          <div className='formContainer'>
            <div className='header'>
              User Form
            </div>
            <div className='fieldsWrapper'>
              <div className='nameFieldsWrapper'>
                <div>
                  <label>First Name</label>
                    <Input type='text' onChange={this.onChangeFirstName} />
                </div>
                <div className='lastName'>
                  <label>Last Name</label>
                  <Input type='text' onChange={this.onChangeLastName} />
                </div>
              </div>
              <div className='emailwrapper'>
                <label>Email Address</label>
                  <div className='email'>
							<Input type='email' onChange={this.onChangeEmail} />
						</div>
					</div>
					<button className='btnStyles' disabled={this.state.disabled} onClick={this.createUser}>Create User</button>
				</div>
			</div>
			<UserListComponent users={this.props.data.home.users} />
		</div>
		)
  }
}

let mapStateToProps = (state) => ({data : state})

let mapDispatchToProps = (dispatch) => 
    bindActionCreators(actionCreators,dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent)
