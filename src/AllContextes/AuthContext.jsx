import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBasePackages/FireBaseConfig";

export const ContentPass = createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    useEffect(()=>{
        const unSubscribe  = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    }

    const login = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
      return signInWithPopup(auth,googleProvider);
    }
    const gitLogin = () =>{
      return signInWithPopup(auth,gitProvider);
    }



    const logOut  = ()=>{
        return signOut(auth);
    }

    const data = {
       user,createUser,login,logOut,googleLogin,gitLogin
    }
  return (
    <ContentPass.Provider value={data}>
      {children}
    </ContentPass.Provider>
  );
};

export default AuthContext;