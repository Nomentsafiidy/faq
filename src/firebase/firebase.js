import * as firebaseApp from 'firebase/app';
import { getFirestore, collection, getDoc, doc, setDoc, addDoc, query, where, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { ref, onUnmounted } from 'vue';

import { User } from '../models/user';
import { Question } from '../models/question';

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
    // const docRef = await addDoc(collection(db, 'user'), {
    //     ...user,
    // });
    await setDoc(doc(db, 'users', user.id), {
        ...user,
    });
};

export const getUserById = async (id) => {
    const docRef = doc(db, 'users', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
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

export const auth = getAuth(app);

//Question
export const saveQuestionToCollection = async (question) => {
    const docRef = await addDoc(collection(db, 'questions'), {
        content: question.content ? question.content : '',
        createdAt: question.createdAt,
        id: question.id ? question.id : '',
        response: question.response ? question.response : '',
        updatedAt: question.updatedAt,
        userId: question.userId,
    });
    question.id = docRef.id;
    return question;
};

export const getQuestionByUserId = async (userId) => {
    const q = query(collection(db, 'questions'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const questionList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        questionList.push(
            new Question({
                ...doc.data(),
                id: doc.id,
            })
        );
    });
    return questionList;
};

export const getQuestionWithoutResponse = async () => {
    const q = query(collection(db, 'questions'), where('response', '==', ''));
    const querySnapshot = await getDocs(q);
    const questionList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        questionList.push(
            new Question({
                ...doc.data(),
                id: doc.id,
            })
        );
    });
    return questionList;
};

export const getQuestionWithResponse = async () => {
    const q = query(collection(db, 'questions'), where('response', '!=', ''));
    const querySnapshot = await getDocs(q);
    const questionList = [];
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        questionList.push(
            new Question({
                ...doc.data(),
                id: doc.id,
            })
        );
    });
    return questionList;
};

//Fire Auth
export const signUp = async (user) => {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
    user.id = userCredential.user.uid;
    delete user.password;
    await saveUserToCollection(user);
    return user;
};

export const signIn = async (login) => {
    const userCredential = await signInWithEmailAndPassword(auth, login.email, login.password);
    if (userCredential) {
        const tmpUser = await getUserById(userCredential.user.uid);
        if (tmpUser) {
            return new User(tmpUser);
        }
    }
};

export const logOut = async () => {
    return await signOut(auth);
};
