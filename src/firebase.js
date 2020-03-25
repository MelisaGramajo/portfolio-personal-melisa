import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBjf6IZuYfYggplIPz_xp4UUAyEBiAgzl0",
    authDomain: "portfolio-personal-2d9a5.firebaseapp.com",
    databaseURL: "https://portfolio-personal-2d9a5.firebaseio.com",
    projectId: "portfolio-personal-2d9a5",
    storageBucket: "portfolio-personal-2d9a5.appspot.com",
    messagingSenderId: "662990164103",
    appId: "1:662990164103:web:82ebe2988e41b315da2822"
};

firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase;

export {
	firebaseApp,
};