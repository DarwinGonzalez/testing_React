import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyBnl_VQiJTt-Iuy1NgbjuNZfcqdvdChRN8",
    authDomain: "firststeps-41abc.firebaseapp.com",
    databaseURL: "https://firststeps-41abc.firebaseio.com",
    projectId: "firststeps-41abc",
    storageBucket: "firststeps-41abc.appspot.com",
    messagingSenderId: "188926910164"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
