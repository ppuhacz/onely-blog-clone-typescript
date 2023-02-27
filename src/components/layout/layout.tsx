import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

const Layout = ({ children, data }: any) => {
  return (
    <>
      <Header />
      <Navbar data={data} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
