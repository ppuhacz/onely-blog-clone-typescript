import React from "react";
import { NavLink } from "react-router-dom";
import onelyLogo from "../../img/onely-logo.png";
import "./footer.scss";

function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer-container">
        <NavLink to="/" className="nav-link">
          <img src={onelyLogo} alt="Onely" className="footer-logo" />
        </NavLink>
        <p className="footer-text">
          Working across the technical spectrum of SEO, Onely provides strong
          commercial value to clients through cutting-edge solutions.
        </p>
        <a href="https://www.facebook.com/Onelycom">
          <i className="fa fa-facebook social-media-footer" />
        </a>
        <a href="https://www.linkedin.com/company/onelycom">
          <i className="fa fa-linkedin social-media-footer" />
        </a>
        <a href="https://twitter.com/onelycom">
          <i className="fa fa-twitter social-media-footer" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
