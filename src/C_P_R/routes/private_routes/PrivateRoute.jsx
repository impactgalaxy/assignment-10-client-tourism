import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import PropTypes from "prop-types"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
export default function PrivateRoute({ children }) {
    const location = useLocation();
    const { user, loadingState } = useContext(AuthContext);

    if (loadingState) {
        return <Loading></Loading>
    }

    if (user !== null) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}
