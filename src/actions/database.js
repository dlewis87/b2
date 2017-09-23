import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCuDWNDyk9WUwLqsT2H7y17BMv_y5vs_5k',
  authDomain: 'btse2-31417.firebaseapp.com',
  databaseURL: 'https://btse2-31417.firebaseio.com',
  projectId: 'btse2-31417',
  storageBucket: 'btse2-31417.appspot.com',
  messagingSenderId: '151504074200',
};

firebase.initializeApp(config);

const database = firebase.database();
const ref = database.ref();

// Database refs
export const messagesRef = ref.child('messages');
export const productsRef = ref.child('products');

// Auth Refs
export const auth = firebase.auth();
