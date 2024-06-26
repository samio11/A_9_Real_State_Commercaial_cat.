import React, { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { ContentPass } from '../AllContextes/AuthContext';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Navbar = () => {
    const { user,logOut } = useContext(ContentPass)
    console.log(user)
    const handleLogOut = () => {
        logOut()
        .then(res=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign Out Successful",
                showConfirmButton: false,
                timer: 1500
              });
        })
        .catch(err=>{
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Sign Out Failed",
                showConfirmButton: false,
                timer: 1500
              });
        })
    }
    const navList = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "btn-outline" : ""
                }
            >
                Home
            </NavLink>
        </li>
       {
        user&&
        <>
         <li>
            <NavLink
                to="/user"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                User Profile
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/updateProfile"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Update Profile
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-500" : ""
                }
            >
                Contact
            </NavLink>
        </li>
        </>
       }
    </>
    return (
        <div>
            <div className="navbar h-[30vh] lg:h-[15vh] bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <img className='w-[70px] rounded-full' src="https://img.freepik.com/free-vector/excavator-construction-logo-with-buildings_23-2148657768.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717459200&semt=ais_user" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex justify-center items-center gap-2'>
                           <div className='tooltip' data-tip={user.displayName}>
                           <img className="rounded-full w-[50px]" src={user.photoURL} alt="" />
                           </div>
                            <button onClick={handleLogOut} className='btn btn-outline'>Sign Out</button>
                        </div> : <div> <Link to={'/login'} className="btn btn-outline">Sign In</Link></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;