import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTop = (Component) => {
  const PageTop = (props) => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <Component {...props} />;
  };

  return PageTop;
};

export default PageTop;
