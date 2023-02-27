import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import onelyLogo from "../../images/onely-logo.png";
import "./header.scss";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
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

  return (
    <header
      className={`header-default ${sticky ? "header-sticky" : ""}
        // ${path[0] === "404" ? "header-404-page" : ""}`}
    >
      <div>
        <NavLink to="/" className="nav-link">
          <img src={onelyLogo} alt="Onely" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
