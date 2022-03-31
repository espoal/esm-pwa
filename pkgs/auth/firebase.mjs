import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'


const firebaseConfig = {
  apiKey: 'AIzaSyC9z7kYOnAsfI2FiAn0Ar5H6AbBa6BJudU',
  authDomain: 'dashboard-a163b.firebaseapp.com',
  projectId: 'dashboard-a163b',
  storageBucket: 'dashboard-a163b.appspot.com',
  messagingSenderId: '276119913389',
  appId: '1:276119913389:web:f7b9f1d8ec96f0a6801724',
  measurementId: 'G-R4CDBFVL6C'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export const signIn = async ({ email, pwd }) => {
  console.log('Singing In!')

  console.log({ email, pwd })
  try {
    const user = await signInWithEmailAndPassword(auth, email, pwd)
    const { uid: authId, accessToken: authToken } = user.user
    localStorage.setItem('authId', authId)
    localStorage.setItem('authToken', authToken)
    console.log({ authId, authToken, user })
    return {authId, authToken}
  } catch (err) {
    console.log({ err })
    throw err
  }
}

export const signUp = async ({ email, pwd }) => {
  console.log('Singing Up!')

  console.log({ email, pwd })
  try {
    const user = await createUserWithEmailAndPassword(auth, email, pwd)
    console.log({ user })
  } catch (err) {
    console.log({ err })
    throw err
  }
}
