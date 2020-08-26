import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeAtVEQT8XmDAfNbMEfDL5RcEmoKlnvHU",
    authDomain: "alox-shop.firebaseapp.com",
    databaseURL: "https://alox-shop.firebaseio.com",
    projectId: "alox-shop",
    storageBucket: "alox-shop.appspot.com",
    messagingSenderId: "388387776714",
    appId: "1:388387776714:web:09848e56c249d662a86c33",
    measurementId: "G-HSKEQXJE1Z"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const saveUserToFirestore = async (userAuth, otherData) =>{
    
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const {displayName, email } = userAuth;
        console.log(otherData)
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })            
        } catch (error) {
            console.log(error)
        }
    }
    return userRef;
}

export const saveDataToFirestore = async (collectionkey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionkey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    })

    return await batch.commit();
}