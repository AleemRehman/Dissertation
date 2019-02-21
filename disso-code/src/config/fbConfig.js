import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'
import 'firebase/storage' 


var config = {
    apiKey: "AIzaSyA0Lgb_-uNx0Bc6ByygYLM_RkpMIswtwj8",
    authDomain: "socialanalyzer-980d8.firebaseapp.com",
    databaseURL: "https://socialanalyzer-980d8.firebaseio.com",
    projectId: "socialanalyzer-980d8",
    storageBucket: "socialanalyzer-980d8.appspot.com",
    messagingSenderId: "597071784490"
  };
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

const storage = firebase.storage();

export {
  storage, firebase as default
}