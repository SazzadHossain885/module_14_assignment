import { NavLink, useLocation } from "react-router-dom";


const NavBar = () => {
    const location = useLocation();
    
    const navOptions = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/testimonials">Testimonials</NavLink></li>
    </>

    return (
        <section className={location.pathname === "/" ? "bg-green-100" : "bg-top-custom"}>
            <nav className="navbar font-semibold max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <NavLink className="btn btn-ghost normal-case text-xl">Design<span className="text-orange-500 uppercase">Agency</span></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="">
                    <button className="btn btn-outline btn-success mx-5"><NavLink>Login</NavLink></button>
                    <button className="btn bg-green-600 mx-3 text-white rounded-xl"><NavLink>Register</NavLink></button>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;