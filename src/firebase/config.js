import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAeSYuR-b2ojc4Wb87kwgv6guKh0CBnJa4",
    authDomain: "e-commerce-maniaci.firebaseapp.com",
    projectId: "e-commerce-maniaci",
    storageBucket: "e-commerce-maniaci.appspot.com",
    messagingSenderId: "979056717908",
    appId: "1:979056717908:web:32cb294f6674b682747dc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}