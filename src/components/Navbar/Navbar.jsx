import React from 'react';

const Navbar = () => {

  const navItems = <>
    <li><a>Home</a></li>
    <li>
      <a>FAQ</a>
    </li>
    <li><a>Changelog</a></li>
    <li><a>Blog</a></li>
    <li><a>Download</a></li>
    <li><a>Contact</a></li></>
  return (
    <div className=' bg-white text-black z-50'>
      <div className="navbar shadow-sm md:w-10/12 mx-auto">
        <div className="navbar-start z-50">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-lg space-y-1  text-medium text-white dropdown-content bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68] rounded-md'><a>Home</a></li>

              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68] rounded-md '>
                <a>FAQ</a>
              </li>

              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68] rounded-md '>
                <a>Changelog</a>
                </li>

              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68]'>
                <a>Blog</a>
                </li>

              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68] rounded-md '>
                <a>Download</a>
                </li>

              <li className='bg-gradient-to-r from-[#00827A] to-[#54CF68] rounded-md '><a>Contact</a></li>
            </ul>
          </div>
          <a className="md:text-2xl text-xl font-bold"> Ticket Managment </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold text-base">
              {navItems}
            </ul>
          </div>
          <div className="btn font-semibold text-[16px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <span >+</span>
            <span >New Ticket</span>
          </div>

        </div>
      </div>
    </div >
  );
};

export default Navbar;