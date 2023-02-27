import { NavLink } from "react-router-dom";
import PageTop from "../page-top/page-top";
import "./page-not-found.scss";

function PageNotFound() {
  return (
    <div className="page-not-found-container">
      <div className="page-not-found">
        <h1 className="error-name">
          404
          <br />
          This page does not exist
        </h1>
        <p className="error-text">
          Sorry, the page you are looking for has not been found.
        </p>
        <NavLink to="/">Go back to home page →</NavLink>
      </div>
    </div>
  );
}
export default PageTop(PageNotFound);
