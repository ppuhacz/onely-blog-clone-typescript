import React, { useEffect, FC } from 'react';
import { useLocation } from 'react-router-dom';

const PageTop = <P extends object>(Component: FC<P>): FC<P> => {
  const PageTopComponent: FC<P> = (props) => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <Component {...props} />;
  };

  return PageTopComponent;
};

export default PageTop;
