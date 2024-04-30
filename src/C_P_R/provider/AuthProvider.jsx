import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
const auth = getAuth(app);

// context
export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingState, setLoadingState] = useState(true);

    const registerUser = (email, password) => {
        setLoadingState(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoadingState(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const createUserWithGoogle = () => {
        setLoadingState(true);
        return signInWithPopup(auth, googleProvider);
    }
    const createUserWithGithub = () => {
        setLoadingState(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOut = () => {
        setLoadingState(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoadingState(false);
        })
        return () => {
            unSubscribe();
        }
    })

    const authInformation = {
        user,
        loadingState,
        registerUser,
        logOut,
        logIn,
        createUserWithGoogle,
        createUserWithGithub,
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}
