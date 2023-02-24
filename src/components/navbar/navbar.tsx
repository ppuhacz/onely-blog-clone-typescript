import React, { FunctionComponent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import "./navbar.scss";
import { NavbarProps } from "./types/navbar-interface";

const Navbar: FunctionComponent<NavbarProps> = ({ data }) => {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);

  if (data) {
    let categories = data.categories;
    let categoriesList: JSX.Element[] = [];
    const allPosts = data.posts;

    // Sorting all posts by the date, from the newest to the oldest
    allPosts.sort(function (post1, post2) {
      return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    });

    // Mapping all categories
    categories.forEach((category) => {
      const categoryName = category.categoryName;
      categoriesList.push(
        <li key={categoryName}>
          <NavLink
            to={`/category/${categoryName.replaceAll(" ", "-")}/1`}
            className="nav-link"
          >
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
        return <span></span>;
      }
    };

    // Navbar will not be display while on a post and author page
    if (
      location.pathname.includes(`/post/`) ||
      location.pathname.includes(`/author/`)
    ) {
      return null;
    }

    return (
      <nav
        className={`${
          path[0] === "category" || path[0] === "posts" ? `post-page-nav` : ""
        } ${path[0] === "404" ? "nav-404-page" : ""}`}
      >
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
  } else {
    return null;
  }
};

export default Navbar;
