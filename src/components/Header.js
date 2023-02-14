import { NavLink } from 'react-router-dom'
import onelyLogo from '../images/onely-logo.png'
import "../styles/header.scss"
import React, { useState, useEffect } from "react";


export default function Header() {
  const [sticky, setSticky] = useState(false);

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
      <header className={`header-default ${sticky ? "header-sticky" : ''}`}>
        <div>
          <NavLink to='/' className='nav-link'>
            <img src={onelyLogo} alt='Onely'/>
          </NavLink>
        </div>
      </header>
  )
}