import React, { Component } from 'react'
import '../styles/input.css'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class InputComponent extends Component {

    constructor() {
        super()
        this.state = {
            isValid: true
        }
        this.validateOnBlur = this.validateOnBlur.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    validateOnBlur (e) {
        if (e.target.value.length === 0) {
            this.setState({
                isValid: false
            })
        }
    }

    onFocus (e) {
        this.setState({
            isValid: true
        })
    }

    onChange (e) {
        this.props.onChange(e.target.value)
    }

    render() {
        let classes = classnames({
            'nameInput': true,
            'inputError': !this.state.isValid
        })
        return (
            <div>
                <input
                    type={this.props.type}
                    className={classes}
                    onBlur={this.validateOnBlur}
                    onFocus={this.onFocus}
                    onChange={this.onChange}
                    defaultValue={this.props.value}
                />
                {!this.state.isValid ?
                    <div className='inValid'>This field should not be blank</div> :
                    ''}
            </div>
        )
    }
}

InputComponent.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default InputComponent
