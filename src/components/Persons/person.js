import React, { Component } from 'react'
import AuthContetx from '../../context/auth-context';

class Person extends Component {
	render() {
		return (
			<div>
				<AuthContetx.Consumer>
					{(context) => context.isAuthenticated ? <div>hi user</div> : <div>pls login</div>}
				</AuthContetx.Consumer>
				{this.props.name}
				{this.props.age}
			</div>
		);
	}
};


export default Person
