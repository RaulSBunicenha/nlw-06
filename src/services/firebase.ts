import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDsWMAI0_SzeSMBKOEa6VkxaPMq3z-GH28",
  authDomain: "nlw-letmeas.firebaseapp.com",
  databaseURL: "https://nlw-letmeas-default-rtdb.firebaseio.com",
  projectId: "nlw-letmeas",
  storageBucket: "nlw-letmeas.appspot.com",
  messagingSenderId: "9884216430",
  appId: "1:9884216430:web:b447f3133451e5f112ca7f"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()
