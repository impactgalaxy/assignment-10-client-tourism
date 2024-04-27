import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import defaultUser from "/user.png";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import Swal from "sweetalert2";
export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = (
        <>
            <li><NavLink to="/" className={`${({ isActive }) => isActive ? "text-green-700 border-b" : ""}`}>Home</NavLink></li>
            <li><NavLink to="/all-tourists-spot" className={`${({ isActive }) => isActive ? "text-green-700 border-b" : ""}`}>All Tourists Spot</NavLink></li>
            <li><NavLink to="/add-tourists-spot" className={`${({ isActive }) => console.log(isActive) ? "text-green-700 border-b" : ""}`}>Add Tourists Spot</NavLink></li>
            <li><NavLink to="/my-list" className={`${({ isActive }) => isActive ? "text-green-700 border-b" : ""}`}>My List</NavLink></li>

        </>
    )
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logout successful",
                    icon: "success",
                    timer: 3000,
                    position: "center",
                }).catch(() => {
                    Swal.fire({
                        icon: "error",
                        timer: 3000,
                        title: "Failed to logout",
                    })
                })
            })

    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Southern Tour</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div tabIndex={0} role="button"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`${user?.displayName}`}
                        data-tooltip-place="top"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <Tooltip id="my-tooltip"></Tooltip>
                            <img src={`${user?.photoURL !== null ? user?.photoURL : defaultUser}`} />

                        </div>
                    </div>
                }

                {
                    user ?
                        <button className="btn" onClick={handleLogout}>Logout</button> :
                        (
                            <div className="flex gap-2 items-center">
                                <Link to="/login" className="btn">Login</Link>
                                <Link to="/register" className="btn">Register</Link>
                            </div>

                        )
                }
            </div>
        </div>
    )
}
