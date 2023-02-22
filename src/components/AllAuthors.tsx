import { NavLink } from "react-router-dom";
import PageTop from "./PageTop";
import "../styles/all-authors.scss";
import React, { useState } from "react";

type SocialMedia = {
  twitter: string;
  instagram: string;
  linkedIn: string;
};

type Author = {
  name: string;
  picture: {
    url: string;
  };
  title: string;
  description: string;
  socialMedia: SocialMedia;
};

type Props = {
  data: {
    authors: Author[];
  };
};

function AllAuthors(props: Props) {
  const [isHovered, setIsHovered] = useState<string>("");

  if (props) {
    const allAuthors: Author[] = props.data.authors;

    const socialMediaStyles = {
      color: "#3dd44f",
      fontSize: "1.6rem",
      marginRight: "1rem"
    };

    const authorsList: JSX.Element[] = [];
    allAuthors.forEach((author: Author) => {
      authorsList.push(
        <div
          className="author-card"
          key={author.name}
          onMouseEnter={() => setIsHovered(author.name)}
          onMouseLeave={() => setIsHovered("")}
        >
          <img src={author.picture.url} alt="author" />
          <div
            className={
              isHovered === author.name
                ? "author-card-hovered"
                : "author-card-not-hovered"
            }
          >
            <div className="author-card-hovered-info">
              <NavLink
                to={`/author/` + author.name.toLowerCase().replaceAll(" ", "-")}
              >
                <h3>{author.name}</h3>
              </NavLink>
              <p className="author-title">{author.title}</p>
              <p className="author-excerpt">
                {author.description.substring(
                  0,
                  author.description.indexOf(".")
                )}
                .
              </p>
              {author.socialMedia.twitter ? (
                <a href={author.socialMedia.twitter}>
                  <i
                    className="fa fa-twitter"
                    style={socialMediaStyles}
                  ></i>
                </a>
              ) : (
                ""
              )}
              {author.socialMedia.instagram ? (
                <a href={author.socialMedia.instagram}>
                  <i
                    className="fa fa-instagram"
                    style={socialMediaStyles}
                  ></i>
                </a>
              ) : (
                ""
              )}
              {author.socialMedia.linkedIn ? (
                <a href={author.socialMedia.linkedIn}>
                  <i
                    className="fa fa-linkedin"
                    style={socialMediaStyles}
                  ></i>
                </a>
              ) : (
                ""
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

  return null;
}

export default PageTop(AllAuthors)