import { NavLink } from "react-router-dom";


const Navbar = () => {
    // const activelink ='text-green-400 border-green-400 bg-blue-400';
    // const  normallink = ' ' ;

    const Link = <>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? "border-green-400 border text-green-400" : "text-[#131313]"}>Home</NavLink></li>
        <li><NavLink to="/listedbooks" className={({ isActive }) => isActive ? "border-green-400 border text-green-400" : "text-[#131313]"}>Listed Books</NavLink></li>
        <li><NavLink to="/pagesread" className={({ isActive }) => isActive ? "border-green-400 border text-green-400" : "text-[#131313]"}>Pages to Read</NavLink></li>
    </>

    return (
        <div className="my-10">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Link}
                        </ul>
                    </div>
                    <a className="lg:text-5xl text-2xl font-bold">Book <span className="text-green-400">Garden</span></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-base font-medium">
                        {Link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn bg-[#23BE0A] border-[#23BE0A] text-base mr-4 text-[#FFFFFF]">Sign In</button>
                    <button className="btn bg-[#59C6D2] border-[#59C6D2] text-base text-[#FFFFFF]">Sign Up</button>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;