import React, { Component } from 'react';
import firebase from 'firebase';
import FileUpload from './FileUpload';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
     user: null 
    }
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  };

  handleLogout() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido de la sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  };

  renderLoginButton() {
    if(this.state.user) {
      return(
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName}  width="200 px"/>
          <p>¡Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
          <FileUpload />
        </div>
      );
    } else {
      return(
        <button onClick={this.handleAuth}>Loggin with Google </button>
      );
    }
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Primeros pasos con React</h1>
        </header>
        <p className="App-intro">
          { this.renderLoginButton() }
        </p>
      </div>
    );
  }
}

export default App;
