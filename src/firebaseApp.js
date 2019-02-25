import firebase from 'firebase/app'

const config = {
  apiKey: process.env.BURGUER_QUEEN_FIREBASE_API_KEY,
  authDomain: process.env.BURGUER_QUEEN_FIREBASE_PROYECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + process.env.BURGUER_QUEEN_FIREBASE_PROYECT_ID + '.firebaseapp.com',
  projectId: process.env.BURGUER_QUEEN_FIREBASE_PROYECT_ID,
  storageBucket: process.env.BURGUER_QUEEN_FIREBASE_PROYECT_ID + 'appspot.com'
}

const FirebaseApp = firebase.initializeApp(config)

console.log('Firebase init with config:', FirebaseApp.options)

export default {
  FirebaseApp: FirebaseApp
}
