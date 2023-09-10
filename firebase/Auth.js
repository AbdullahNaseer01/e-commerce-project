'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true,
});

export default function useFirebaseAuth() {
  console.log("auth context imported")
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const clearUser = () => {
        setAuthUser(null);
        setIsLoading(false);
        console.log("clear user called");
    };
    const consol = () => {
      console.log("authContext console");
      console.log(authUser)
    };
  
    useEffect(() => {
      consol();

    }, []);
    const authStateChanged = async (user) => {
        setIsLoading(true);
        if (!user) {
          console.log("if part is running msg from auth")
            clearUser();
            return;
        }
        console.log(user)
        setAuthUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
        });
        setIsLoading(false);
    };

    // const signOut = () => {
    //     authSignOut(auth).then(() => clearUser());
    //     ()=>{console.log("signout done")}
    // };
    // const signOut = () => {
    //     authSignOut(auth).then(() => {
    //         clearUser();
    //         console.log("signout done");
    //     });
    //     console.log("sign out done");
    // };
    const signOut = () => {
        authSignOut(auth).then(() => {
            clearUser();
            console.log("signout done");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };
    

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unSubscribe();
    }, []);

    return {
        authUser,
        isLoading,
        signOut,
        setAuthUser,
    };
}

export const AuthUserProvider = ({ children }) => {
    const auth = useFirebaseAuth();
    return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
    );
};

export const useAuth = () => useContext(AuthUserContext);
