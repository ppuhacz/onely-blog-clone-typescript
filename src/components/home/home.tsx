import React from "react";
import { NavLink } from "react-router-dom";
import PageTop from "../page-top/page-top";
import "./home.scss";
import { Props } from "./types/home.interface";

const Home: React.FC<Props> = ({ data }) => {
  if (data) {
    const allPosts = data.posts;

    //Searching for the recommended post to display at the top of the site
    const recommendedPost = allPosts.filter(
      (post) => post.recommendedPost === true
    );

    const recommendedPostPanel: JSX.Element[] = [];
    if (recommendedPost.length) {
      recommendedPost.forEach((post) => {
        recommendedPostPanel.push(
          <div className="recommended-post" key={post.slug}>
            <div className="recommended-post-cover">
              <NavLink to={"/post/" + post.slug}>
                <img src={post.coverImage.url} alt="Post cover" />
              </NavLink>
            </div>
            <div className="recommended-post-text">
              <span>
                <p className="recommended-post-recommended">RECOMMENDED POST</p>{" "}
                <p className="recommended-post-date">{post.date}</p>
              </span>
              <br />
              <span>
                <NavLink to={"/post/" + post.slug}>
                  <h2 className="recommended-post-title">{post.title}</h2>
                </NavLink>
              </span>
              <br />
              <span>
                <p className="recommended-post-excerpt">{post.excerpt}</p>
              </span>
              <br />
              <NavLink
                to={"/post/" + post.slug}
                className="recommended-post-read-more"
              >
                <span>
                  <p className="recommended-post-read-more-text">Read more</p>
                </span>
              </NavLink>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="missing-recommended-post">
          No recommended post at this moment!
        </div>
      );
    }

    // Getting 3 of the newest posts to be displayed above the "Knowledge Base" panel and rendering them
    const threeLatestPosts = allPosts.slice(0, 3);

    const mostRecentPosts: JSX.Element[] = [];
    threeLatestPosts.forEach((post) => {
      mostRecentPosts.push(
        <NavLink to={"/post/" + post.slug} key={post.slug}>
          <div className="recent-post">
            <img src={post.coverImage.url} alt="Post cover" />
            <span>
              <p>{post.author.name},</p>
              <p>{post.date}</p>
            </span>
            <span>
              <h3>{post.title}</h3>
            </span>
          </div>
        </NavLink>
      );
    });

    // Getting all posts within the "knowledge base" category, sorting them from the newst to the oldest and displaying 3 of the most recent at the display

    const allKnowledgeBasePosts =
      data?.categories.find(
        (category) => category.categoryName === "Knowledge Base"
      )?.posts ?? [];

    allKnowledgeBasePosts.sort(function (post1, post2) {
      return new Date(post2.date).getTime() - new Date(post1.date).getTime();
    });

    const latestKnowledgeBasePosts: JSX.Element[] = [];
    const knowledgeBasePosts = allKnowledgeBasePosts?.slice(0, 3) ?? [];

    knowledgeBasePosts.forEach((post) => {
      latestKnowledgeBasePosts.push(
        <NavLink to={`/post/${post.slug}`} key={post.slug}>
          <div className="recent-knowledge-posts">
            <img src={post.coverImage.url} alt="Post cover" />
            <span className="knowledge-base-post-info">
              <p>{post.author.name},</p>
              <p>{post.date}</p>
            </span>
            <span className="knowledge-base-post-title">
              <h3>{post.title}</h3>
            </span>
          </div>
        </NavLink>
      );
    });

    // Exporting the latestKnowledgeBasePosts variable somewhere else in the code

    // Getting the next 6 most recent posts to display on the page
    const nextLatestPosts = allPosts.slice(3, 9);
    const recentPosts: JSX.Element[] = [];

    nextLatestPosts.forEach((post) => {
      recentPosts.push(
        <NavLink to={"/post/" + post.slug} key={post.slug}>
          <div className="recent-post">
            <img src={post.coverImage.url} alt="Post cover" />
            <span>
              <p>{post.author.name},</p>
              <p>{post.date}</p>
            </span>
            <span>
              <h3>{post.title}</h3>
            </span>
          </div>
        </NavLink>
      );
    });

    return (
      <main>
        <div className="home-page-container">
          <section className="recommended-post-section">
            <div className="recommended-post-container">
              {recommendedPostPanel}
            </div>
          </section>
          <section className="posts">{mostRecentPosts}</section>
          <section className="knowledge-base">
            <div className="knowledge-base-container">
              <span className="knowledge-base-title">
                <h2>Knowledge Base</h2>
                <NavLink
                  to="/category/Knowledge-Base/1"
                  className="knowledge-base-read-more"
                >
                  <strong>Read more</strong>
                </NavLink>
              </span>
              <div className="knowledge-base-grid-container">
                {latestKnowledgeBasePosts}
              </div>
            </div>
          </section>
          <section className="posts">{recentPosts}</section>
          <div className="show-more-posts-container">
            <span className="show-more-posts">
              <NavLink to="/posts/1">Show more posts</NavLink>
            </span>
          </div>
        </div>
      </main>
    );
  }
  return null;
};

export default PageTop(Home);
