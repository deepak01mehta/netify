import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCE1ZVEwe9L0GMe7a4xYXUh_fPbe59Pnks",
  authDomain: "netify-f0c14.firebaseapp.com",
  projectId: "netify-f0c14",
  storageBucket: "netify-f0c14.firebasestorage.app",
  messagingSenderId: "1031168833388",
  appId: "1:1031168833388:web:14297d0d656a0b7d4f2549",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
};
}

const login =async(email,password)=>{
    try{
         await signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

        
    }
}

const logout =()=>{
    signOut(auth);
}

export {auth ,db,login,signup,logout};