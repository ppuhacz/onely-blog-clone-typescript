import React from "react";
import { NavLink } from "react-router-dom";
import PageTop from "../page-top/page-top";
import "./all-authors.scss";
import { Props, Author } from "./types/all-authors.interface";

function AllAuthors({ data }: Props) {
  const allAuthors: Author[] = data?.authors;

  const authorsList = allAuthors.map((author: Author) => {
    return (
      <div className="author-card" key={author.name}>
        <img src={author.picture.url} alt="author" />
        <div className="author-card-hovered">
          <div className="author-card-hovered-info">
            <NavLink to={`/author/${author.slug}`}>
              <h3>{author.name}</h3>
            </NavLink>
            <p className="author-title">{author.title}</p>
            <p className="author-excerpt">{author.description}</p>
            {author.socialMedia.twitter && (
              <a href={author.socialMedia.twitter}>
                <i className="fa fa-twitter social-media"></i>
              </a>
            )}
            {author.socialMedia.instagram && (
              <a href={author.socialMedia.instagram}>
                <i className="fa fa-instagram social-media"></i>
              </a>
            )}
            {author.socialMedia.linkedIn && (
              <a href={author.socialMedia.linkedIn}>
                <i className="fa fa-linkedin social-media"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="all-authors-header">
        <div className="onely-desc-container">
          <div className="onely-desc-title">
            <h2>
              Onely is a group of geeks on a mission to make the web better.
            </h2>
          </div>
          <div className="onely-desc-text">
            <p>
              We holistically audit your website to create a winning strategy
              for technical optimization, and then we implement it with your
              team to get you more revenue.
            </p>
          </div>
        </div>
      </div>
      <div className="our-team">
        <h2>Our Team</h2>
      </div>
      <div className="all-authors-container">{authorsList}</div>
    </>
  );
}

export default PageTop(AllAuthors);
