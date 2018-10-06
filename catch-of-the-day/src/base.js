import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyABDFT0gUbEx9Zc9XiwkKTIWxzX9X3vUCk',
  authDomain: 'catch-of-the-day-joe-meli.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-joe-meli.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
