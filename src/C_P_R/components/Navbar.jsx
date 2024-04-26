import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    const navLinks = (
        <>
            <li><NavLink to="/" className={`${(isActive) => isActive ? "text-green-700 border-b" : ""}`}>Home</NavLink></li>
            <li><NavLink to="/all-tourists-spot" className={`${(isActive) => isActive ? "text-green-700 border-b" : ""}`}>All Tourists Spot</NavLink></li>
            <li><NavLink to="/add-tourists-spot" className={`${(isActive) => isActive ? "text-green-700 border-b" : ""}`}>Add Tourists Spot</NavLink></li>
            <li><NavLink to="/my-list" className={`${(isActive) => isActive ? "text-green-700 border-b" : ""}`}>My List</NavLink></li>
        </>
    )
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
                <Link to="/login" className="btn">Login</Link>
            </div>
        </div>
    )
}
