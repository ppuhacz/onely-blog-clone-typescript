import React from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").slice(1);
  let breadcrumbs = [];

  paths.forEach((path, index) => {
    breadcrumbs.push(<span key={index}> {path} </span>);
    if (index !== paths.length - 1) {
      breadcrumbs.push(<span key={-index - 1}> / </span>);
    }
  });
  console.log(location)
  if(location.pathname !== '/') {
    return (
      <div className="breadcrumbs">
        <span className="breadcrumb-item">Onely /</span>
        {breadcrumbs}
      </div>
    );
  }
};

export default Breadcrumbs;
