import React, { useEffect, ComponentType } from "react";
import { useLocation } from "react-router-dom";

// This component ensures that page will always go to the top on redirect
// On some devices the page doesnt redirect you to the top of the page, but to the position of the previous site
// which is most likely some kind of a React bug since same thing happens on instagram

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
