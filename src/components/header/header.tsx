import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Location } from "react-router-dom";
import onelyLogo from "../../img/onely-logo.png";
import "./header.scss";

const Header = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const location: Location = useLocation();
  const path: string[] = location.pathname.split("/").slice(1);

  useEffect(() => {
    const handleScroll = () => setSticky(window.pageYOffset > 25);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header-default ${sticky ? "header-sticky" : ""}
        ${path[0] === "404" ? "header-404-page" : ""}`}
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
