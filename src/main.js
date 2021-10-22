import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index.js'

import {initializeApp} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARJL60ferpe0OQzEMdbJDnCn4NbhfEKFw",
  authDomain: "vue-auth-62599.firebaseapp.com",
  projectId: "vue-auth-62599",
  storageBucket: "vue-auth-62599.appspot.com",
  messagingSenderId: "683862631437",
  appId: "1:683862631437:web:3065df1adc736d4ed62144"
}
// Initialize Firebase
const firebase = initializeApp(firebaseConfig)


createApp(App).use(router).use(store).mount('#app')
