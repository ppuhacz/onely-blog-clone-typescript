import { useState } from "react";
import { NavLink } from "react-router-dom";

// Perhaps change it to use navlinks instead ????????????

function Pagination(props) {

  // Creating a state to keep track of current page
  const [currentPage, setCurrentPage] = useState(0);

  if (props.data.posts.length) {
    // Creating a pagination with 3 pages per site
    const pages = [];
    for (let i=0; i < props.data.posts.length; i += 3) {
      pages.push(props.data.posts.slice(i, i+3))
    }

    // Creating a function to handle pagination buttons
    function handlePreviousClick() {
      if(currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
    }

    function handleNextClick() {
      if(currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1)
      }
    }

    // Getting all the posts that should be displayed on current page and rendering them
    const page = pages[currentPage];
    const postsDisplayed = []

    page.forEach((post) => {
      postsDisplayed.push (
        <NavLink to={'/post/' + post.slug} key={post.slug}>
          <div className="recent-post">
            <img src={post.coverImage.url} alt='Post cover' />
            <span><p>{post.author.name},</p><p>{post.date}</p></span>
            <span><h3>{post.title}</h3></span>
          </div>
        </NavLink>
    )})

    return (
      <main>
        <div className="all-posts-container">
          {postsDisplayed}
          <span>
            {currentPage === 0 ? '' : <button onClick={handlePreviousClick}>← Previous</button>}
            {currentPage === pages.length - 1 ? '' : <button onClick={handleNextClick}>Next →</button>}
          </span>
        </div>
      </main>
    )
  }
}

export default Pagination