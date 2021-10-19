import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyCc3mYYqxbIdVjRGbJBu8o_IYJhCrmpkkM',
    authDomain: 'faqs-1c5b5.firebaseapp.com',
    projectId: 'faqs-1c5b5',
    storageBucket: 'faqs-1c5b5.appspot.com',
    messagingSenderId: '349593345819',
    appId: '1:349593345819:web:d67e2b9c1b21e588163dbe',
    measurementId: 'G-41DYGMJN8D',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app');
