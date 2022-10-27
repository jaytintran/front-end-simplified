// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDX1wqBMHyrPhXOXVAJA2Rkhcxlm5xKWrw",
	authDomain: "fir-crash-course-883d8.firebaseapp.com",
	projectId: "fir-crash-course-883d8",
	storageBucket: "fir-crash-course-883d8.appspot.com",
	messagingSenderId: "195406560156",
	appId: "1:195406560156:web:2252e308cb2cbb26142659",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore()
