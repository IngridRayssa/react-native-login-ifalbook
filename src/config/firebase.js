
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBD3ZEkCVfLfmtFB2qvh4E5rotEUmEvorI",
  authDomain: "ingridrayssaifal513.firebaseapp.com",
  projectId: "ingridrayssaifal513",
  storageBucket: "ingridrayssaifal513.appspot.com",
  messagingSenderId: "908395644883",
  appId: "1:908395644883:web:acde082af6fe15a9c35126"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage }
