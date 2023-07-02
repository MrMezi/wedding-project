import React from 'react'
import Logo from "../img/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className="links">
                <Link className='link' to="/">
                    <h6>ABOUT US</h6>
                </Link>
                <Link className='link' to="/">
                    <h6>RSVP</h6>
                </Link>
                <Link className='link' to="/login">
                    <h6>LOGIN</h6>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar