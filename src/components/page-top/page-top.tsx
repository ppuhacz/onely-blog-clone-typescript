import React, { useEffect, ComponentType } from "react";
import { useLocation } from "react-router-dom";

// Nie usunę tego bo strona mi się wtedy pierdoli, przestań się śmiać 😡

const PageTop = <P extends object>(
  Component: ComponentType<P>
): ComponentType<P> => {
  const PageTopComponent = (props: P) => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <Component {...props} />;
  };

  return PageTopComponent;
};

export default PageTop;
