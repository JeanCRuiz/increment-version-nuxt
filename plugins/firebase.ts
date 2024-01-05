import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc, getDocs, onSnapshot } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

export default defineNuxtPlugin(async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDxfInO54Xh_xn1iiLp6Cloq1YW3eSKujI',
    authDomain: 'global-zechat.firebaseapp.com',
    projectId: 'global-zechat',
    storageBucket: 'global-zechat.appspot.com',
    messagingSenderId: '389419871790',
    appId: '1:389419871790:web:9a4a457fa56a8a1316b9bf',
    measurementId: 'G-8V2B0LE2JF'
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  await signInWithEmailAndPassword(auth, 'marcosdash@lugotech.com.do', '123456')
  const db = getFirestore(app)

  return {
    provide: {
      auth,
      db,
      collection,
      doc,
      getDocs,
      onSnapshot,
      getStorage
    }
  }
})
