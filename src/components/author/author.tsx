import React, { memo } from "react";
import { Navigate, NavLink, useParams } from "react-router-dom";
import "./author.scss";
import PageTop from "../page-top/page-top";
import { Props } from "./types/author.interface";
import { socialMediaStyles, quotationMarkStyles } from "./author-styles";

const Author = memo((props: Props) => {
  const { id } = useParams<{ id: string }>();
  const { data } = props;
  if (data) {
    let { authors } = data;

    // Filtering chosen author
    const author = authors.find((author) => author.slug === id);

    if (author) {
      // Iterating through all posts of chosen author
      const authorsPosts = author.posts.map((post) => (
        <NavLink to={`/post/${post.slug}`} key={post.slug}>
          <div className="recent-post">
            <img src={post.coverImage.url} alt="Post cover" />
            <span>
              <p>{author.name},</p>
              <p>{post.date}</p>
            </span>
            <span>
              <h3>{post.title}</h3>
            </span>
          </div>
        </NavLink>
      ));

      return (
        <main>
          <div className="author-page">
            <div className="author-header-container">
              <div className="author-header">
                <div className="author-header-text">
                  <h1>{author.name}</h1>
                  <p className="author-title">{author.title}</p>
                  <p className="author-description">{author.description}</p>
                  <span className="social-media">
                    {author.socialMedia.twitter && (
                      <a
                        href={author.socialMedia.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa fa-twitter"
                          style={socialMediaStyles}
                        ></i>
                      </a>
                    )}
                    {author.socialMedia.instagram && (
                      <a
                        href={author.socialMedia.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa fa-instagram"
                          style={socialMediaStyles}
                        ></i>
                      </a>
                    )}
                    {author.socialMedia.linkedIn && (
                      <a
                        href={author.socialMedia.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i
                          className="fa fa-linkedin"
                          style={socialMediaStyles}
                        ></i>
                      </a>
                    )}
                  </span>
                </div>
                <img src={author.picture.url} alt="author" />
              </div>
            </div>
            <div className="author-questions-container">
              {Object.values(author).map((qa, i) => {
                if (qa.question && qa.answer) {
                  return (
                    <div className="question-and-answer" key={i}>
                      <div className="question">
                        <h4>{qa.question}</h4>
                      </div>
                      <div className="answer">
                        <i
                          className="material-symbols-outlined"
                          style={quotationMarkStyles}
                        >
                          format_quote
                        </i>
                        <p>{qa.answer}</p>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            {authorsPosts.length ? (
              <div className="authors-posts-container">
                <div className="authors-recent-posts">
                  <h3>All posts from this author:</h3>
                </div>
                <div className="authors-posts">{authorsPosts}</div>
              </div>
            ) : (
              ""
            )}
          </div>
        </main>
      );
    } else {
      return <Navigate to="/404" />;
    }
  }
  return null;
});

export default PageTop(Author);
