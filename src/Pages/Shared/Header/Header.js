import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import img from '../../../assets/heart.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogoOut = () => {
        logOut()
            .then()
            .catch();
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/myreviews'>My reviews</Link></li>

                    <li className='font-semibold'><Link to='/addreviews'>Add reviews</Link></li>

                    <li className='font-semibold'>
                        <button onClick={handleLogoOut} className="btn btn-ghost">Sign Out</button>
                    </li>
                </>
                :
                <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar mt-2 bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl w-24">
                    <img src={img} alt="" />

                </Link>
                <span className='font-bold text-orange-400 px-2'>Heart Doctor</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">
                    <Link to='/blog'>Blog</Link>
                </button>
            </div>
        </div>
    );
};

export default Header;