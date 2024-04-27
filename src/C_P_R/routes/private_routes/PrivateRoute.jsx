import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
export default function PrivateRoute({ children }) {
    const location = useLocation();
    const { user } = useContext(AuthContext);


    if (user !== null) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}
