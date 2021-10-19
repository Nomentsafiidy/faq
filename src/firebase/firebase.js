import * as firebaseApp from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

import { ref, onUnmounted } from 'vue';

const config = {
    apiKey: 'AIzaSyCc3mYYqxbIdVjRGbJBu8o_IYJhCrmpkkM',
    authDomain: 'faqs-1c5b5.firebaseapp.com',
    projectId: 'faqs-1c5b5',
    storageBucket: 'faqs-1c5b5.appspot.com',
    messagingSenderId: '349593345819',
    appId: '1:349593345819:web:d67e2b9c1b21e588163dbe',
    measurementId: 'G-41DYGMJN8D',
};

const app = firebaseApp.initializeApp(config);

// const db = app.firestore();
const db = getFirestore(app);
const usersCollection = collection(db, 'user');

export const saveUserToCollection = async (user) => {
    try {
        const docRef = await addDoc(collection(db, 'user'), {
            ...user,
        });
        console.log('Document written with ID: ', docRef.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export const getUser = async (id) => {
    console.log(id);
    const snapshot = await getDocs(usersCollection);
    const cityList = snapshot.docs.map((doc) => doc.data());
    return cityList;
};

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user);
};

export const deleteUser = (id) => {
    return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
    const users = ref([]);
    const close = usersCollection.onSnapshot((snapshot) => {
        users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
    onUnmounted(close);
    return users;
};
