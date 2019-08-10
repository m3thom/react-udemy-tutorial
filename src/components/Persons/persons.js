import React, { Component } from 'react'
import Person from './person';

class Persons extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			this.props.persons.map(person => {
				return <Person key={person.id} {...person} />
			})
		);
	}
}

export default Persons;
