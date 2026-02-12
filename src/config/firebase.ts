// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDWwEA3Jsk-80bEStewy88KFSqD4kWkSM",
  authDomain: "fir-course-eb42b.firebaseapp.com",
  projectId: "fir-course-eb42b",
  storageBucket: "fir-course-eb42b.firebasestorage.app",
  messagingSenderId: "18164692009",
  appId: "1:18164692009:web:3712df2aa011f68fcc9838",
  measurementId: "G-WHPFPYD3C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);