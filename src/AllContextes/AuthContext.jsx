import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FireBasePackages/FireBaseConfig";

export const ContentPass = createContext(null)
const AuthContext = ({children}) => {
    const [user,setUser] = useState(null);
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

    const logOut  = ()=>{
        return signOut(auth);
    }

    const data = {
       user,createUser,login,logOut
    }
  return (
    <ContentPass.Provider value={data}>
      {children}
    </ContentPass.Provider>
  );
};

export default AuthContext;