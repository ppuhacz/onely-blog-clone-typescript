import { NavLink } from 'react-router-dom'
import onelyLogo from '../images/onely-logo.png'
import "../styles/header.scss"

export default function Header() {

  return(
      <header>
        <div className='header'>
          <NavLink to='/' className='nav-link'>
            <img src={onelyLogo} alt='Onely'/>
          </NavLink>
        </div>
      </header>
  )
}
