import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Breadcrumbs: FC = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").slice(1);
  let breadcrumbs: JSX.Element[] = [];

  paths.forEach((path, index) => {
    breadcrumbs.push(<span key={index}> {path} </span>);
    if (index !== paths.length - 1) {
      breadcrumbs.push(<span key={-index - 1}> / </span>);
    }
  });

  if (location.pathname !== "/") {
    return (
      <div className="breadcrumbs">
        <span className="breadcrumb-item">Onely /</span>
        {breadcrumbs}
      </div>
    );
  }
  return null;
};

export default Breadcrumbs;
