import PageTop from "./PageTop"

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2>404 Page not found</h2>
      <p>
        Sorry, the page you are looking for has not been found. <i className="fa fa-frown-o" aria-hidden="true"></i>
      </p>
    </div>
  )
}
export default PageTop(PageNotFound)