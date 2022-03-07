import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut,getAuth } from 'firebase/auth'
import React, { useState, useEffect, createContext, useContext } from 'react'

const AuthContext = createContext({
    currentUser: null,
    signInWithGoogle: () => Promise,
    logout: () => Promise
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user )=> {
            const currentUser = auth.currentUser;
            setCurrentUser(user ? {...currentUser} : null);
        })

        return () => {
            unsubscribe();
        }
    }, [])

  

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    

        function logout() {
            signOut(auth)
            alert("you are logged out")
            setCurrentUser(null)
    
        }
   

    const value = {
        signInWithGoogle,
        currentUser,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}