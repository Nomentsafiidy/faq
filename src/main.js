import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyBtX0zbq8OWFoczz-D55IEQ-zQxcmjZ6BU',
    authDomain: 'invoice-app-yt.firebaseapp.com',
    projectId: 'invoice-app-yt',
    storageBucket: 'invoice-app-yt.appspot.com',
    messagingSenderId: '638958069840',
    appId: '1:638958069840:web:2a359ba0cf4b8c7b648955',
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
