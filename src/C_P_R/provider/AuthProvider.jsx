import { createContext } from "react"
import PropTypes from "prop-types";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const authInformation = {}
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node
}
