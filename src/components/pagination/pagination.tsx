import { useEffect } from "react";
import { NavLink, useParams, Navigate } from "react-router-dom";
import "./pagination.scss";
import { Props, Post } from "./types/pagination.interface";

function Pagination({ data, itemsPerPage, pageRoute }: Props) {
  // Creating a variable to keep track of current page

  const { page } = useParams<{ page: string }>();
  const currentPageNumber = page ? Number(page) : 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageNumber]);

  if (data.length) {
    // Creating a pagination with `itemsPerPage` items per site
    const pages: Post[][] = [[]];
    for (let i = 0; i < data.length; i += itemsPerPage) {
      if (i >= 0) {
        pages.push(data.slice(i, i + itemsPerPage));
      }
    }

    // Getting all the items that should be displayed on current page and rendering them
    const currentPage = pages[currentPageNumber];
    const itemsDisplayed: JSX.Element[] = [];

    // Making a redirect functions so you can't access the /page/:id that doesn't exist
    // If you go lower :id than "1" you will be redirected to /page/1
    // If you go higher :id than the higest id available you will be redirected to the last page
    // If you type in :id that is NaN it will redirect you to /404 page

    if (currentPageNumber < 1) {
      return <Navigate to={`/${pageRoute}/1`} />;
    } else if (currentPageNumber > pages.length - 1) {
      return <Navigate to={`/${pageRoute}/${pages.length - 1}`} />;
    } else if (isNaN(parseInt(currentPageNumber.toString(), 10))) {
      return <Navigate to="/404" />;
    }

    currentPage.forEach((item, index) => {
      itemsDisplayed.push(
        <NavLink to={`/post/${item.slug}`} key={index}>
          <div className="recent-item">
            <img src={item.coverImage.url} alt="Item cover" />
            <span>
              <p>{item.author.name},</p>
              <p>{item.date}</p>
            </span>
            <span>
              <h3>{item.title}</h3>
            </span>
          </div>
        </NavLink>
      );
    });

    return (
      <main>
        <div className="all-items-container">{itemsDisplayed}</div>
        <div className="pagination-container">
          {currentPageNumber === 1 ? (
            ""
          ) : (
            <span className="pagination-control">
              <NavLink to={`/${pageRoute}/${currentPageNumber - 1}`}>
                ← Previous
              </NavLink>
            </span>
          )}
          {currentPageNumber === pages.length - 1 ? (
            ""
          ) : (
            <span className="pagination-control">
              <NavLink to={`/${pageRoute}/${currentPageNumber + 1}`}>
                Next →
              </NavLink>
            </span>
          )}
        </div>
      </main>
    );
  }

  return <div> There are no posts to display at the moment.</div>;
}

export default Pagination;
