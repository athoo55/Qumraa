import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import logo from './assets/logo.png';
import backgroundImg from './assets/backgroundImg.jpg';
import Login from '../components/Login';

function Header() {
  const [nav, setNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClick = () => setNav(!nav);
  const toggleLogin = () => setShowLogin(!showLogin);

  return (
    <div className='flex items-center justify-between py-2 bg-yellow-300 shadow-lg'>
      <div className='pl-4 md:pl-5'>
        <img className='w-12 md:w-16' src={logo} alt="logo" />
      </div>
      <nav className='hidden md:flex items-center'>
        <ul className='flex flex-row items-center justify-center m-3'>
          <Link to="/" onClick={() => setNav(false)}>
            <li className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
              Home
            </li>
          </Link>
          <Link to="/About" onClick={() => setNav(false)}>
            <li className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
              About
            </li>
          </Link>
          <Link to="/Category" onClick={() => setNav(false)}>
            <li className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
              Category
            </li>
          </Link>
          <Link to="/Photographers" onClick={() => setNav(false)}>
            <li className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
              Photographers
            </li>
          </Link>
          <a href='#footer' onClick={() => setNav(false)}>
            <li className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
              Contact Me
            </li>
          </a>
        </ul>
      </nav>
      <div className='md:hidden z-20 pr-4 md:pr-5' onClick={handleClick}>
        {nav ? <FaTimes size={25} color='white' /> : <RxHamburgerMenu size={25} color='black' />}
      </div>
      <div
        className={`${
          nav ? 'fixed inset-0 z-10' : 'hidden'
        } transition-transform duration-300`}
      >
        <div className='absolute inset-0 bg-black opacity-60' onClick={() => setNav(false)}></div>
        <ul
          className={`${
            nav ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 absolute top-0 right-0 w-4/5 h-full bg-yellow-300 shadow-lg flex flex-col justify-center items-center text-lg md:text-2xl z-20`}
        >
          <li className='p-4 hover:text-yellow-500 font-serif transition-colors'>
            <Link to="/" onClick={() => setNav(false)}>Home</Link>
          </li>
          <li className='p-4 hover:text-yellow-500 font-serif transition-colors'>
            <Link to="/About" onClick={() => setNav(false)}>About</Link>
          </li>
          <li className='p-4 hover:text-yellow-500 font-serif transition-colors'>
            <Link to="/Category" onClick={() => setNav(false)}>Category</Link>
          </li>
          <li className='p-4 hover:text-yellow-500 font-serif transition-colors'>
            <Link to="/Photographers" onClick={() => setNav(false)}>Photographers</Link>
          </li>
          <li className='p-4 hover:text-yellow-500 font-serif transition-colors'>
            <a href='#footer' onClick={() => setNav(false)}>Contact Me</a>
          </li>
        </ul>
      </div>
      <button onClick={toggleLogin} className='text-base md:text-lg font-serif m-3 md:m-5 hover:text-yellow-700 transition-colors'>
        Login
      </button>
      {showLogin && <Login toggleLogin={toggleLogin} />}
    </div>
  );
}

export default Header;
