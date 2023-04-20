import React, { FC } from "react";
import { useLocation, Location } from "react-router-dom";

const Breadcrumbs: FC = () => {
  const location: Location = useLocation();
  const paths: string[] = location.pathname.split("/").slice(1);
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
