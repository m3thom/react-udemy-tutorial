import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import '../../containners/App.css'

var ids = require('short-id');

class Cockpit extends Component {
	state = {
		name: '',
		age: ''
	}
	changedHandler = (event) => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}
	submitHandler = () => {
		const { name, age } = this.state
		const id = ids.generate()
		const personInfo = { name, age, id }
		this.setState({ name: '', age: '' })
		this.props.addPersonHandler(personInfo)
	}
	render() {
		return (
			<Aux>
				<div>
					Add new person
				</div>
				<input name="name" value={this.state.name} onChange={this.changedHandler} />
				<input name="age" value={this.state.age} onChange={this.changedHandler} />
				<button onClick={this.submitHandler}>Add</button>
			</Aux>
		);
	}
}

export default withClass(Cockpit, "App");
