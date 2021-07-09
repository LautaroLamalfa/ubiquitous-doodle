import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBHnTGXVk1WRAOt8iivNzoBT8oab2fWbfw",
    authDomain: "el-control-remoto.firebaseapp.com",
    projectId: "el-control-remoto",
    storageBucket: "el-control-remoto.appspot.com",
    messagingSenderId: "531263258314",
    appId: "1:531263258314:web:fe587a4eaeb81fcc66fe33"
}

const fb = firebase.initializeApp(firebaseConfig)

export const database = fb.firestore();