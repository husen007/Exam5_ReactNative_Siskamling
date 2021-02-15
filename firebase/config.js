/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtYOPvX_iTFmPcnlPVbAmqAstMe2liDbc",
    authDomain: "exam5reactnative.firebaseapp.com",
    databaseURL: "https://exam5reactnative-default-rtdb.firebaseio.com",
    projectId: "exam5reactnative",
    storageBucket: "exam5reactnative.appspot.com",
    messagingSenderId: "48300283540",
    appId: "1:48300283540:web:4a0ebec12c49488d2d8681",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export {db};