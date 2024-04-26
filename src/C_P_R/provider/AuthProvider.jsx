import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types";
import app from "../firebase/firebase.init";
const auth = getAuth(app);

// context
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingState, setLoadingState] = useState(true);

    const registerUser = (email, password) => {
        setLoadingState(true);
        return createUserWithEmailAndPassword(auth, email, password);
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
    console.log(user);

    const authInformation = {
        user,
        loadingState,
        registerUser,
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
