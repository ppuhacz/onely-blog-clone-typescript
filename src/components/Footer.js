import { NavLink } from 'react-router-dom'
import onelyLogo from '../images/onely-logo.png'

export default function Footer() {

  const socialMediaStyles = {
    color: '#ff55ff',
    fontSize: '2rem',
    marginRight: '1rem'
  }

  return (
    <footer>
      <div className='footer-container'>
        <NavLink to='/' className='nav-link'>
          <img src={onelyLogo} alt='Onely'/>
        </NavLink>
          <p>Working across the technical spectrum of SEO, Onely provides strong commercial value to clients through cutting-edge solutions.</p>
          <a href='https://www.facebook.com/Onelycom/'><i className="fa fa-facebook" style={socialMediaStyles} /></a>
          <a href='https://www.linkedin.com/company/onelycom'><i className="fa fa-linkedin" style={socialMediaStyles} /></a>
          <a href='https://twitter.com/onelycom'><i className="fa fa-twitter" style={socialMediaStyles} /></a>
      </div>
    </footer>
  )
}