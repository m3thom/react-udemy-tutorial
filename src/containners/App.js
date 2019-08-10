import React, { Component } from 'react';
import './App.css';
import Cockpit from './Cockpit/cockpit';
import Persons from '../components/Persons/persons';
import AuthContetx from '../context/auth-context';
var ids = require('short-id');


class App extends Component {
  state = {
    persons: [
      { name: "Martin", id: ids.generate(), age: 22 },
      { name: "Emma", id: ids.generate(), age: 23 }
    ],
    isAuthenticated: false,


  }
  login = () => {
    this.setState({ isAuthenticated: true })
  }
  addPersonHandler = (personInfo) => {
    const persons = [...this.state.persons]
    persons.push(personInfo)
    this.setState({ persons })
  }
  render() {
    const { persons } = this.state
    return (
      <div className='App'>
        <button onClick={this.login}>login</button>
        <AuthContetx.Provider value={{ isAuthenticated: this.state.isAuthenticated, login: this.login }}>
          <Cockpit
            addPersonHandler={this.addPersonHandler}
          />
          <Persons persons={persons} />
        </AuthContetx.Provider>
      </div>
    );
  }
}

export default App;
