import { NavLink, useLocation } from 'react-router-dom'
import onelyLogo from '../images/onely-logo.png'
import "../styles/header.scss"
import React, { useState, useEffect } from "react";


export default function Header() {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 25) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return(
      <header className={
        `header-default ${sticky ? "header-sticky" : ''}
        ${path[0] === '404' ? 'header-404-page' : ''}`
      }>
        <div>
          <NavLink to='/' className='nav-link'>
            <img src={onelyLogo} alt='Onely'/>
          </NavLink>
        </div>
      </header>
  )
}