import React from "react";
import { NavLink, useLocation, Location } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import "./navbar.scss";
import { NavbarProps } from "./types/navbar.interface";

const Navbar = ({ data }: NavbarProps) => {
  const location: Location = useLocation();
  const path: string[] = location.pathname.split("/").slice(1);

  if (!data) {
    return null;
  }

  const { categories } = data;

  // Mapping all categories
  const categoriesList: JSX.Element[] = categories.map((category) => {
    const { slug, categoryName } = category;

    return (
      <li key={slug}>
        <NavLink to={`/category/${slug}/1`} className="nav-link">
          {categoryName}
        </NavLink>
      </li>
    );
  });

  const titleDisplay = (): JSX.Element => {
    if (path[0] === "category") {
      return (
        <span className="category-name">
          <h1>{path[1].replaceAll("-", " ")}</h1>
        </span>
      );
    } else if (path[0] === "posts") {
      return (
        <span className="category-name">
          <h1>All posts</h1>
        </span>
      );
    } else {
      return <span />;
    }
  };

  // Navbar will not be display while on a post and author page
  if (
    location.pathname.includes(`/post/`) ||
    location.pathname.includes(`/author/`)
  ) {
    return null;
  }

  // Creating a logic that will check what type (if any) of navbar should be displayed
  const isPostsPage: boolean = path[0] === "category" || path[0] === "posts";
  const is404Page: boolean = path[0] === "404";
  let navClassNames: string = isPostsPage ? "post-page-nav" : "";

  if (is404Page) {
    navClassNames += " nav-404-page";
  }

  return (
    <nav className={navClassNames}>
      <div>
        <Breadcrumbs />
        {titleDisplay()}
        <ul>
          <li key="home">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li key="categories">
            <span className="categories-span">
              Categories{" "}
              <i className="material-symbols-outlined expand-icon">
                expand_more
              </i>
            </span>
            <ul className="categories-list">
              <li key="allPosts">
                <NavLink to="/posts/1" className="nav-link">
                  All posts
                </NavLink>
              </li>
              {categoriesList}
            </ul>
          </li>
          <li key="allAuthors">
            <NavLink to="/authors" className="authors-list nav-link">
              Our team
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
