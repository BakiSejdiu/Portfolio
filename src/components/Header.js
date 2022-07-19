import React from 'react'
import {Link} from 'react-router-dom';
import Navigation from './Navigation'
import '../styles/Header.css'

function Header() {
  return (
    <>
        <header>
            <div className='container'>
                <Link to='/'> <img src={"images/logo2.svg"} alt="logo" /> </Link>
                <Navigation />
            </div>
        </header>
    </>

  );
}

export default Header