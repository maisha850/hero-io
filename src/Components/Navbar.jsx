import React from 'react';
import { Link, NavLink} from 'react-router';
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  
    
    return (
      <div className="navbar md:px-20 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <NavLink to="/">Home</NavLink>
           <NavLink to="/apps" >Apps</NavLink>
   <NavLink>Installation</NavLink>
      </ul>
    </div>
    <a className="flex items-center">
        <img className='w-10 h-10' src={logo} alt="" />
        <h3 className='font-bold  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h3>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex gap-8 text-[#632EE3] font-semibold menu-horizontal px-1">
   <NavLink to="/">Home</NavLink>
   <NavLink to="/apps" >Apps</NavLink>
   <NavLink>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={`https://github.com/maisha850/hero-io`} className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'><FaGithub size={20}></FaGithub> Contribute</Link>
  </div>
</div>
    );
};

export default Navbar;