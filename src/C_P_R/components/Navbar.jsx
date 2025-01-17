import { useContext, useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import defaultUser from "/user.png";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import Swal from "sweetalert2";


export default function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(false);
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
                })
            }).catch(() => {
                Swal.fire({
                    icon: "error",
                    timer: 3000,
                    title: "Failed to logout",
                })
            })

    }
    //theme controller
    const handleTheme = (e) => {
        const value = e.target.checked;
        if (value) {
            localStorage.setItem("theme", JSON.stringify(true))
            setTheme(true);
        } else {
            localStorage.setItem("theme", JSON.stringify(false));
            setTheme(false);
        }
    }
    useEffect(() => {
        const getValue = localStorage.getItem("theme");
        JSON.parse(getValue) ? setTheme(true) : setTheme(false);
        theme
            ? document.querySelector("html").setAttribute("data-theme", "business")
            : document.querySelector("html").setAttribute("data-theme", "light");
    }, [theme])



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
                <Link to="/" className="btn btn-ghost md:text-xl">Southern Tour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="swap swap-rotate"
                    data-tooltip-id="theme"
                    data-tooltip-content="Theme"
                    data-tooltip-place="bottom">
                    <Tooltip id="theme"></Tooltip>
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" checked={theme} className="theme-controller" onChange={handleTheme} />
                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                </label>
                {
                    user && <div tabIndex={0} role="button"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`${user?.displayName === null ? "No name" : user?.displayName}`}
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
                        <button className="btn text-sm md:text-lg" onClick={handleLogout}>Logout</button> :
                        (
                            <div className="flex gap-2 items-center">
                                <Link to="/login" className="btn sm:text-sm">Login</Link>
                                <Link to="/register" className="btn hidden md:flex">Register</Link>
                            </div>

                        )
                }
            </div>
        </div>
    )
}
