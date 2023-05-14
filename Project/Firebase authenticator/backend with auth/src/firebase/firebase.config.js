// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0gKnv61GTLx3yZoHvuI1rhA-4r0jCJqk",
    authDomain: "trail-d71fd.firebaseapp.com",
    projectId: "trail-d71fd",
    storageBucket: "trail-d71fd.appspot.com",
    messagingSenderId: "708284002682",
    appId: "1:708284002682:web:3ad5b25ea579891b3326c3",
    measurementId: "G-EEBDE4L80G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export default app;