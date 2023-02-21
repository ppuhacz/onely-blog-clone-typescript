import { NavLink } from 'react-router-dom';
import onelyLogo from '../images/onely-logo.png';
import "../styles/footer.scss";
import React from 'react';

interface SocialMediaStyles {
  color: string;
  fontSize: string;
  marginRight: string;
}

function Footer(): JSX.Element {

  const socialMediaStyles: SocialMediaStyles = {
    color: '#fff',
    fontSize: '1.5rem',
    marginRight: '1.8rem',
  };

  return (
    <footer>
      <div className='footer-container'>
        <NavLink to='/' className='nav-link'>
          <img src={onelyLogo} alt='Onely' className='footer-logo'/>
        </NavLink>
          <p className='footer-text'>Working across the technical spectrum of SEO, Onely provides strong commercial value to clients through cutting-edge solutions.</p>
          <a href='https://www.facebook.com/Onelycom'><i className="fa fa-facebook" style={socialMediaStyles} /></a>
          <a href='https://www.linkedin.com/company/onelycom'><i className="fa fa-linkedin" style={socialMediaStyles} /></a>
          <a href='https://twitter.com/onelycom'><i className="fa fa-twitter" style={socialMediaStyles} /></a>
      </div>
    </footer>
  );
}

export default Footer;