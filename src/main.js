import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/index.js'
import {firebaseAPP} from './firestore/firestoreInit.js'
import '@/style/bootstrapCustom.scss'


createApp(App).use(router).use(store).mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
